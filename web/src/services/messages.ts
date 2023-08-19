import axios, { AxiosError, AxiosResponse } from 'axios';
import { Message } from '../types';

interface ErrorResponse {
  message: string;
}

type AllMessagesResponse = Message[] | AxiosResponse<ErrorResponse>;

/**
 * Fetches all messages from the server.
 *
 * @returns {Promise<AllMessagesResponse>} A promise that resolves with the array of messages on success,
 * or an AxiosResponse containing an error message on failure.
 * @throws {Error} If the fetching process fails, an error is thrown with an appropriate message.
 */
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

/**
 * Sends a new message to the server.
 *
 * @param {string} message - The message content to be sent.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<Message>} A promise that resolves with the sent message data on success.
 * @throws {Error} If sending the message fails, an error is thrown with an appropriate message.
 */
export const sendMessage = async (message: string, token: string): Promise<Message> => {
  try {
    const config = { headers: { Authorization: token } };
    const messageJson = {
      message: message
    };
    const response = await axios.post<Message>('/api/messages', messageJson, config);
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

/**
 * Deletes a message from the server.
 *
 * @param {number} messageId - The ID of the message to be deleted.
 * @param {string} token - The user's authentication token.
 * @returns {Promise<void>} A promise that resolves on successful message deletion.
 * @throws {Error} If deleting the message fails, an error is thrown with an appropriate message.
 */
export const deleteMessage = async (messageId: number, token: string): Promise<void> => {
  try {
    const config = { headers: { Authorization: `Bearer ${token}` } };
    await axios.delete(`/api/messages/${messageId}`, config);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const responseError = error as AxiosError;
      console.error('Error deleting message:', responseError.response?.data);
      if (responseError.response?.data) {
        const data = responseError.response.data as ErrorResponse;
        throw new Error(data.message);
      } else {
        throw new Error('Deleting message failed.');
      }
    } else {
      console.error('Error deleting message:', error);
      throw new Error('Deleting message failed.');
    }
  }
};
