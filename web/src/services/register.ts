import axios, { AxiosResponse } from 'axios';

interface RegisterResponse {
  message: string;
}

export const registerUser = async (username: string, password: string): Promise<void> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post('/api/register', { username, password });
    console.log('Registration successful:', response.data.message);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Error during registration:', error.response?.data);
    } else {
      console.error('Error during registration:', error);
    }
  }
};
