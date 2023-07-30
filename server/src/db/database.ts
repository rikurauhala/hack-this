import sqlite3 from 'sqlite3';
import { Message, User } from '../types';

class Database {
  private db: sqlite3.Database;

  constructor(dbFilePath: string) {
    this.db = new sqlite3.Database(dbFilePath, (error) => {
      if (error) {
        console.error('Error connecting to the database:', error.message);
      } else {
        console.log('Connected to the database');
      }
    });
  }

  public getUser(username: string, password: string): Promise<User | null> {
    return new Promise<User | null>((resolve, reject) => {
      this.db.get(
        `SELECT id, username, password FROM users WHERE username = '${username}' AND password = '${password}'`,
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
      this.db.exec(
        `INSERT INTO users (username, password) VALUES ('${username}', '${password}')`,
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
      JOIN users u ON m.user_id = u.id
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

  public close(): void {
    this.db.close((error) => {
      if (error) {
        console.error('Error closing the database connection:', error.message);
      } else {
        console.log('Database connection closed');
      }
    });
  }
}

export default Database;
