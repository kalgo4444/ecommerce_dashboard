import { Button } from "antd";
import { memo } from "react";

const ProductsTab = () => {
  return (
    <section className="p-3">
      <div className="flex justify-end my-2">
        <Button onClick={() => alert("add product")}>Add Product</Button>
      </div>
    </section>
  );
};

export default memo(ProductsTab);
