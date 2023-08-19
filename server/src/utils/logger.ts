const textColorYellow = '\x1b[33m';
const textColorRed = '\x1b[31m';
const textColorBlue = '\x1b[34m';
const textColorReset = '\x1b[0m';

const infoPrefix = `[${textColorYellow}INFO${textColorReset}]`;
const errorPrefix = `[${textColorRed}ERROR${textColorReset}]`;
const requestPrefix = `[${textColorBlue}REQUEST${textColorReset}]`;

/**
 * Logs information to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The information to be logged.
 */
export const logInfo = (...params: string[]): void => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(infoPrefix, ...params);
  }
};

/**
 * Logs an error to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The error information to be logged.
 */
export const logError = (...params: string[]): void => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(errorPrefix, ...params);
  }
};

/**
 * Logs information about a new HTTP request.
 *
 * @param {string} method - The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} path - The path of the request.
 * @param {string} ip - The IP address from which the request originated.
 * @returns {void}
 */
export const logRequest = (method: string, path: string, ip: string): void => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(requestPrefix, `New ${method} request to ${path} from ${ip}`);
  }
};
