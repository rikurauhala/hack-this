export interface Message {
  createdAt: string;
  message: string;
  messageId: number;
  username: string;
  userId: number;
}

export interface User {
  admin: boolean;
  id: string;
  token: string;
  username: string;
}

