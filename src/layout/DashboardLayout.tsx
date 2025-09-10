import { memo, useEffect } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import { useAuth } from "../features/auth/services/useAuth";
import { useDispatch } from "react-redux";
import { removeToken } from "../features/auth/store/authSlice";

const DashboardLayout = () => {
  const { getAuthMe } = useAuth();
  const { isError } = getAuthMe();
  const dis = useDispatch();

  useEffect(() => {
    if (isError) {
      dis(removeToken());
    }
  }, [isError]);
  
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-2">
        <Header />
        <div className="min-h-[200vh] overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default memo(DashboardLayout);
