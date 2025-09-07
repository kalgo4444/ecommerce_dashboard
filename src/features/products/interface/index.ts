export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  categoryId: number;
  stock: number;
  image?: string[];
  brand?: string;
}
