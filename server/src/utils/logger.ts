export const logInfo = (...params: string[]) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(...params);
  }
};

export const logError = (...params: string[]) => {
  if (process.env.NODE_ENV !== 'test') {
    console.error(...params);
  }
};
