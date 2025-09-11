import { memo } from "react";
import InnerBack from "../../../shared/components/ui/innerBack/innerBack";
import { Outlet } from "react-router-dom";
import TabNav from "../components/tab-nav/tab-nav";

const Products = () => {
  return (
    <>
      <title>Dashboard | Products</title>
      <InnerBack>
        <TabNav />
        <Outlet />
      </InnerBack>
    </>
  );
};

export default memo(Products);
