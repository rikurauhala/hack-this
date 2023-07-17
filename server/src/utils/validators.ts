interface Validity {
  valid: boolean;
  errorMessage?: string;
}

export const validateUsername = (username: string): Validity => {
  if (username.length === 0) {
    return {
      valid: false,
      errorMessage: 'Username cannot be empty',
    };
  }

  if (username.length < 4) {
    return {
      valid: false,
      errorMessage: 'Username must be at least 4 characters long',
    };
  }

  if (username.length >= 30) {
    return {
      valid: false,
      errorMessage: 'Username cannot exceed 30 characters',
    };
  }

  const allowedCharacters = /^[a-zA-Z0-9_.-]+$/;
  if (!allowedCharacters.test(username)) {
    return {
      valid: false,
      errorMessage: 'Username must only contain alphanumeric characters, dashes, dots, or underscores',
    };
  }

  return {
    valid: true,
  };
};

export const validatePassword = (password: string): Validity => {
  if (password.length === 0) {
    return {
      valid: false,
      errorMessage: 'Password cannot be empty',
    };
  }

  if (password.length < 4) {
    return {
      valid: false,
      errorMessage: 'Password must be at least 4 characters long',
    };
  }

  return {
    valid: true,
  };
};
