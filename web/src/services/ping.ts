import axios, { AxiosResponse } from 'axios';

export const getPing = async () => {
  try {
    const response: AxiosResponse<string> = await axios.get('/api/ping');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
