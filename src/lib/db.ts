export type User = {
  id: number;
  email: string;
  phone: string;
  password: string;
  cpf: string;
  rg?: string;
  pin: string;
  createdIn: Date;
};

export const users: User[] = [];