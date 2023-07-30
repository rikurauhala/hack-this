export interface Message {
  createdAt: string;
  message: string;
  messageId: string;
  username: string;
  userId: string;
}

export interface User {
  id: string;
  token: string;
  username: string;
}

