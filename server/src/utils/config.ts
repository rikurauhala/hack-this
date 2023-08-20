import dotenv from 'dotenv';

dotenv.config();

export const API_BASE_PATH = '/api/';
export const LOG_FILE_PATH = process.env.LOG_FILE_PATH || '../../data/log.txt';
export const DATABASE_URL = process.env.DATABASE_URL || '../../data/database.db';
export const PORT = process.env.PORT || 8080;
export const SECRET = process.env.SECRET as string;
