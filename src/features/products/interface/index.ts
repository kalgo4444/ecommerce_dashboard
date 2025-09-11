export interface ICategorys {
  id?: number;
  name: string;
  user?: {
    id?: number | string;
    fname: string;
    email: string;
  };
}
