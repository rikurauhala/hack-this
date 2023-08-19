const textColorYellow = '\x1b[33m';
const textColorRed = '\x1b[31m';
const textColorReset = '\x1b[0m';

const infoPrefix = `[${textColorYellow}INFO${textColorReset}]`;
const errorPrefix = `[${textColorRed}ERROR${textColorReset}]`;

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
