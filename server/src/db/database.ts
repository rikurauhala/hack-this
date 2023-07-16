import sqlite3 from 'sqlite3';

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

  public executeQuery<T>(query: string, params: string[] = []): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db.all(query, params, (error, rows) => {
        if (error) {
          console.error('Error:', error);
          reject(error);
        } else {
          resolve(rows as T[]);
        }
      });
    });
  }

  public registerUser(username: string, passwordHash: string) {
    return new Promise<void>((resolve, reject) => {
      this.db.exec(
        `INSERT INTO users (username, password_hash) VALUES ('${username}', '${passwordHash}')`,
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
