export interface User {
  id: number;
  name: string;
  company: string;
}

export interface Service {
  id: number;
  name: string;
  company: string;
  category: string;
  release_date: number;
  description: string;
}

export interface Interaction {
  id: number;
  userId: number;
  serviceId: number;
  timestamp: number;
  prompt: string;
  output: string;
}
