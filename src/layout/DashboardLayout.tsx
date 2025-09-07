import { memo } from "react";
import Sidebar from "./components/sidebar/sidebar";
import { Outlet } from "react-router-dom";
import Header from "./components/header/header";

const DashboardLayout = () => {
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
