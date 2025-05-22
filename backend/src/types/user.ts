export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type UserToBeCreated = {
  name: string;
  email: string;
  hashedPassword: string;
}