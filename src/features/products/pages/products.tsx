import { memo } from "react";
import InnerBack from "../../../shared/components/ui/innerBack/innerBack";
import ProductTable from "../components/tabel/tabel";
import { PRODUCTS } from "../../../shared/static";

const Products = () => {
  return (
    <>
      <title>Dashboard | Products</title>
      <InnerBack>
        <ProductTable data={PRODUCTS} />
      </InnerBack>
    </>
  );
};

export default memo(Products);
