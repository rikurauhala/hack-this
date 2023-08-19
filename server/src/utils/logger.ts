/**
 * Logs information to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The information to be logged.
 */
export const logInfo = (...params: string[]) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

/**
 * Logs an error to the console, except when in the 'test' environment.
 *
 * @param {...string} params - The error information to be logged.
 */
export const logError = (...params: string[]) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params);
  }
};
