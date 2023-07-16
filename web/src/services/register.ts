import axios, { AxiosError, AxiosResponse } from 'axios';

interface RegisterResponse {
  message: string;
}

export const registerUser = async (username: string, password: string): Promise<AxiosResponse<RegisterResponse>> => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post('/api/register', { username, password });
    console.log('Registration successful:', response.data.message);
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
