import axios, { AxiosError, AxiosResponse } from 'axios';
import { Message } from '../types';

interface ErrorResponse {
  message: string;
}

type AllMessagesResponse = Message[] | AxiosResponse<ErrorResponse>;

export const getAllMessages = async (): Promise<AllMessagesResponse> => {
  try {
    const response = await axios.get('/api/messages');
    return response.data as Message[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error during fetching all messages:', responseError.response?.data);
      if (responseError.response?.data) {
        const data = responseError.response.data as ErrorResponse;
        throw new Error(data.message);
      } else {
        throw new Error('Fetching all messages failed.');
      }
    } else {
      console.error('Error during fetching all messages:', error);
      throw new Error('Fetching all messages failed.');
    }
  }
};

export const sendMessage = async (message: string, token: string): Promise<Message> => {
  try {
    const config = { headers: { Authorization: token } };
    const messageJson = {
      message: message
    };
    const response = await axios.post<Message>('/api/messages', messageJson, config);
    console.log('Message sent:', response.data);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error sending message:', responseError.response?.data);
      if (responseError.response?.data) {
        const data = responseError.response.data as ErrorResponse;
        throw new Error(data.message);
      } else {
        throw new Error('Sending message failed.');
      }
    } else {
      console.error('Error sending message:', error);
      throw new Error('Sending message failed.');
    }
  }
};
