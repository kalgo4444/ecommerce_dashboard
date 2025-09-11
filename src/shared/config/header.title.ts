export const headerTitle = (pathname: string) => {
  if (pathname.startsWith("/users")) {
    return "Users";
  } else if (pathname.startsWith("/products")) {
    return "Products";
  } else {
    return "Statistic";
  }
};
