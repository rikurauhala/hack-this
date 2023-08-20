import fs from 'fs';
import { LOG_FILE_PATH } from './config';

const textColorYellow = '\x1b[33m';
const textColorRed = '\x1b[31m';
const textColorBlue = '\x1b[34m';
const textColorGray = '\x1b[90m';
const textColorReset = '\x1b[0m';

const infoPrefix = `[${textColorYellow}INFO${textColorReset}]`;
const errorPrefix = `[${textColorRed}ERROR${textColorReset}]`;
const requestPrefix = `[${textColorBlue}REQUEST${textColorReset}]`;

/**
 * Strips ANSI color codes from a string.
 *
 * @param {string} input - The string containing color codes.
 * @returns {string} The string with color codes removed.
 */
const stripColors = (input: string): string => {
  const colors = new RegExp(/\x1B\[\d+m/g);
  return input.replace(colors, '');
};

/**
 * Appends a message to the log file. Set the log file path via config.
 *
 * @param {string} message - The message to be appended to the log file.
 */
const appendToFile = (message: string): void => {
  try {
    const plainMessage = stripColors(message);
    fs.appendFileSync(LOG_FILE_PATH, plainMessage + '\n');
  } catch (error) {
    console.error('Error writing to log file:', error);
  }
};

/**
 * Gets the current timestamp in the format "[HH:mm:ss]".
 *
 * @returns {string} The formatted timestamp.
 */
const getTimestamp = (): string => {
  const now = new Date();
  return `${textColorGray}[${now.toISOString().slice(11, 19)}]${textColorReset}`;
};

/**
 * Logs information to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The information to be logged.
 */
export const logInfo = (...params: string[]): void => {
  if (process.env.NODE_ENV !== 'test') {
    const logMessage = `${getTimestamp()} ${infoPrefix} ${params.join(' ')}`;
    console.log(logMessage);
    appendToFile(logMessage);
  }
};

/**
 * Logs an error to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The error information to be logged.
 */
export const logError = (...params: string[]): void => {
  if (process.env.NODE_ENV !== 'test') {
    const logMessage = `${getTimestamp()} ${errorPrefix} ${params.join(' ')}`;
    console.error(logMessage);
    appendToFile(logMessage);
  }
};

/**
 * Logs information about a new HTTP request.
 *
 * @param {string} method - The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} path - The path of the request.
 * @param {string} ip - The IP address from which the request originated.
 */
export const logRequest = (method: string, path: string, ip: string): void => {
  if (process.env.NODE_ENV !== 'test') {
    const logMessage = `${getTimestamp()} ${requestPrefix} New ${method} request to ${path} from ${ip}`;
    console.log(logMessage);
    appendToFile(logMessage);
  }
};
