import type { IUser } from "../../features/users/interface";

export const NAVLINK = [
  {
    label: "/",
    name: "Statistic",
  },
  {
    label: "/users",
    name: "Users",
  },
  {
    label: "/products",
    name: "Products",
  },
];

export const USERS: IUser[] = [
  {
    id: 4,
    fname: "Ali",
    lname: "Valiyev",
    isActive: false,
    address: "Tashkent, Uzbekistan",
    email: "muhammadsodiqmuhammadjanov36@gmail.com",
    role: "user",
  },
];

export const PRODUCTS = [
  {
    id: 1,
    title: "Melon",
    description: "Hello world",
    price: 100,
    categoryId: 2,
    stock: 100,
    image: [],
    brand: "Chevrolet",
  },
];
