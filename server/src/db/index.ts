import { DATABASE_URL } from '../utils/config';
import Database from './database';

export const db = new Database(DATABASE_URL);
