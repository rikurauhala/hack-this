import axios, { AxiosError, AxiosResponse } from 'axios';

interface LoginResponse {
  id: string;
  token: string;
  username: string;
  message?: string;
}

/**
 * Attempts to log in a user by sending a POST request with the provided username and password.
 *
 * @param {string} username - The username for the login attempt.
 * @param {string} password - The password for the login attempt.
 * @returns {Promise<AxiosResponse<LoginResponse>>} A promise that resolves with the login response data upon success.
 * @throws {Error} If the login attempt fails, an error is thrown with a message indicating the reason.
 */
export const login = async (username: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post('/api/login', { username, password });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error during login:', responseError.response?.data);
      if (responseError.response?.data) {
        const data = responseError.response.data as LoginResponse;
        throw new Error(data.message);
      } else {
        throw new Error('Login failed.');
      }
    } else {
      console.error('Error during login:', error);
      throw new Error('Login failed.');
    }
  }
};
