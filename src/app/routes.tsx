import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "../shared/components/not-found/notFound";

const DashboardLayout = lazy(() => import("../layout/DashboardLayout"));
const Statistic = lazy(() => import("../features/statistic/pages/statistic"));
const Products = lazy(() => import("../features/products/pages/products"));
const Users = lazy(() => import("../features/users/pages/users"));

const Auth = lazy(() => import("../features/auth/pages/auth"));
const Login = lazy(() => import("../features/auth/pages/login"));
const Register = lazy(() => import("../features/auth/pages/register"));

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
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default memo(AppRoutes);
