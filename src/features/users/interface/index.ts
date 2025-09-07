export interface IUser {
  id: number;
  fname: string;
  lname: string;
  isActive: boolean;
  address: string;
  email: string;
  role: "user" | "admin" | "owner";
}
