import { memo, useEffect } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import { useAuth } from "../features/auth/services/useAuth";
import { useDispatch } from "react-redux";
import { removeToken } from "../features/auth/store/authSlice";

import { Toaster } from "sonner";

const DashboardLayout = () => {
  const { getAuthMe } = useAuth();
  const { isError, data: user } = getAuthMe();
  const dis = useDispatch();

  useEffect(() => {
    if (isError) {
      dis(removeToken());
    }
  }, [isError]);

  return (
    <div className="flex">
      <Sidebar data={user?.data} />
      <main className="flex-1 p-2">
        <Header />
        <div className="min-h-[200vh] overflow-y-auto">
          <Outlet />
          <Toaster position="top-center" expand={false} />
        </div>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
