export const headerTitle = (pathname: string) => {
  switch (pathname) {
    case "/users":
      return "Users";
    case "/products":
      return "Products";
    default:
      return "Statistic";
  }
};
