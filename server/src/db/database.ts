import sqlite3 from 'sqlite3';
import { Message, User } from '../types';
import * as logger from '../utils/logger';

class Database {
  private db: sqlite3.Database;

  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath, (error) => {
      if (error) {
        logger.logError('Error connecting to the database:', error.message);
      } else {
        logger.logInfo('Connected to the database');
      }
    });
  }

  public usernameIsTaken(username: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.db.get(
        'SELECT COUNT(*) as count FROM users WHERE username = ?',
        username,
        (error: Error | null, row: { count: number }) => {
          if (error) {
            reject(error);
          } else {
            resolve(row.count > 0);
          }
        }
      );
    });
  }

  public getUserById(id: number): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.db.get(
        `SELECT id, username FROM users WHERE id = ?`,
        id,
        (error: Error | null, row: User) => {
          if (error) {
            reject(error);
          } else {
            if (row) {
              resolve(row);
            } else {
              resolve(null);
            }
          }
        }
      );
    });
  }

  public getUser(username: string, password: string): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.db.get(
        `SELECT id, username, admin FROM users WHERE username = '${username}' AND password = '${password}'`,
        (error: Error | null, row: User) => {
          if (error) {
            reject(error);
          } else {
            if (row) {
              resolve(row);
            } else {
              resolve(null);
            }
          }
        }
      );
    });
  }

  public registerUser(username: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      this.db.run(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password],
        (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        }
      );
    });
  }

  public insertMessage(message: string, createdAt: string, userId: string): Promise<Message> {
    return new Promise<Message>((resolve, reject) => {
      this.db.run(
        'INSERT INTO messages (message, created_at, user_id) VALUES (?, ?, ?)',
        [message, createdAt, userId],
        (error: Error | null) => {
          if (error) {
            reject(error);
          } else {
            this.db.get(
              'SELECT * FROM messages WHERE id = (SELECT MAX(id) FROM messages) LIMIT 1',
              (error: Error | null, row: Message) => {
                if (error) {
                  reject(error);
                } else {
                  resolve(row);
                }
              }
            );
          }
        }
      );
    });
  }

  public getAllMessages(): Promise<Message[] | null> {
    const query = `
      SELECT m.message, m.id as messageId, m.created_at as createdAt, u.username, u.id as userId
      FROM messages m
      JOIN users u
      ON m.user_id = u.id
      ORDER BY m.created_at DESC
    `;

    return new Promise<Message[] | null>((resolve, reject) => {
      this.db.all(
        query,
        (error: Error | null, rows: Message[]) => {
          if (error) {
            reject(error);
          } else {
            if (rows.length > 0) {
              resolve(rows);
            } else {
              resolve(null);
            }
          }
        }
      );
    });
  }

  public deleteMessage(messageId: number): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.db.run(
        'DELETE FROM messages WHERE id = ?',
        [messageId],
        function (error: Error | null) {
          if (error) {
            reject(error);
          } else {
            const isDeleted = this.changes === 1;
            resolve(isDeleted);
          }
        }
      );
    });
  }

  public close(): void {
    this.db.close((error) => {
      if (error) {
        logger.logError('Error closing the database connection:', error.message);
      } else {
        logger.logInfo('Database connection closed');
      }
    });
  }
}

export default Database;
