import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../shared/components/not-found/notFound";

const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));

const Statistic = lazy(() => import("../features/statistic/pages/statistic"));
const Users = lazy(() => import("../features/users/pages/users"));

const Products = lazy(() => import("../features/products/pages/products"));
const ProductsTab = lazy(
  () => import("../features/products/pages/tab_page/products_tab")
);
const CategorysTab = lazy(
  () => import("../features/products/pages/tab_page/categorys_tab")
);

const Auth = lazy(() => import("../features/auth/pages/auth"));
const Login = lazy(() => import("../features/auth/pages/login"));
const Register = lazy(() => import("../features/auth/pages/register"));
const Otp = lazy(() => import("../features/auth/pages/otp"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Statistic />,
            },
            {
              path: "/products",
              element: <Products />,
              children: [
                {
                  index: true,
                  element: <ProductsTab />,
                },
                {
                  path: "category",
                  element: <CategorysTab />,
                },
              ],
            },
            {
              path: "/users",
              element: <Users />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/otp",
      element: <Otp />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default memo(AppRoutes);
