export interface Message {
  id: number;
  created_at: string;
  message: string;
  username: string;
}

export interface User {
  id: string;
  token: string;
  username: string;
}

