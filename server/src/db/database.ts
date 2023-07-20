import sqlite3 from 'sqlite3';
import { User } from '../types';

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
