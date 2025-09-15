export type User = {
  id: number;
  fullName: string;
  roles?: string[];
  email: string;
  phone: string;
  password: string;
  cpf: string;
  rg?: string;
  birthDate: Date;
  pin: string;
  balance: number;
  piggys: Piggy[];
  cards: Card[];
  transactions: Transaction[];
  emailVerified?: boolean;
  phoneVerified?: boolean;
  createdIn: Date;
};

export type TransactionStatus = "pending" | "completed" | "failed" | "cancelled";

export type Transaction = {
  id: number;
  status: TransactionStatus;
  method?: "pix" | "ted" | "doc" | "boleto" | "card" | "internal";
  value: number;
  date: Date;
  description?: string;
  fromUserId?: number;
  toUserId?: number;
};

export type Piggy = {
  id: number;
  name: string;
  value: number;
  goal?: number;
  createdIn: Date;
};

export type CardStatus = "active" | "blocked" | "expired" | "cancelled";

export type Card = {
  id: number;
  status: CardStatus;
  number: string;
  name: string;
  expiry: string;
  cvv: string;
  limit: number;
  createdIn: Date;
};

export type LoanStatus = "requested" | "approved" | "rejected" | "active" | "paid" | "default";

export type Loan = {
  id: number;
  status: LoanStatus;
  requestedAt: Date;
  approvedAt?: Date;
  paidAt?: Date;
};

export const users: User[] = [];