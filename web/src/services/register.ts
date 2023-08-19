import axios, { AxiosError, AxiosResponse } from 'axios';

interface RegisterResponse {
  message: string;
}

/**
 * Registers a new user by sending a POST request with the provided username and password.
 *
 * @param {string} username - The username for the new user.
 * @param {string} password - The password for the new user.
 * @returns {Promise<AxiosResponse<RegisterResponse>>} A promise that resolves with the registration response
 * data upon success.
 * @throws {Error} If the registration attempt fails, an error is thrown with a message indicating the reason.
 */
export const registerUser = async (username: string, password: string): Promise<AxiosResponse<RegisterResponse>> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post('/api/register', { username, password });
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error during registration:', responseError.response?.data);
      if (responseError.response?.data) {
        const data = responseError.response.data as RegisterResponse;
        throw new Error(data.message);
      } else {
        throw new Error('Registration failed.');
      }
    } else {
      console.error('Error during registration:', error);
      throw new Error('Registration failed.');
    }
  }
};
