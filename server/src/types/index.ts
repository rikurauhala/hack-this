export interface Message {
  message: string;
  created_at: string;
  username: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
}
