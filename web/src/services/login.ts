import axios, { AxiosError, AxiosResponse } from 'axios';

interface LoginResponse {
  token: string;
  username: string;
}

export const login = async (username: string, password: string): Promise<AxiosResponse<LoginResponse>> => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post('/api/login', { username, password });
    console.log('Login successful. Logged in as', response.data.username);
    return response;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error during login:', responseError.response?.data);
      throw new Error('Login failed.');
    } else {
      console.error('Error during login:', error);
      throw new Error('Login failed.');
    }
  }
};
