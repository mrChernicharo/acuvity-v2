export interface User {
  id: number;
  name: string;
  company: string;
  imageUrl: string;
}

export interface Service {
  id: number;
  name: string;
  company: string;
  category: string;
  release_date: number;
  description: string;
  imageUrl: string;
}

export interface Interaction {
  id: number;
  userId: number;
  serviceId: number;
  prompts: { input: string; output: string; timestamp: number }[];
}
