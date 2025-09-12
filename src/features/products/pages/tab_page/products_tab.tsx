import { Button, Select } from "antd";
import { memo, useCallback, useState } from "react";
import Popap from "../../components/popap/popap";
import { useProducts } from "../../services/useProduct";
import ItemCard from "../../components/card/item-card";
import { toast } from "sonner";
import type { IProduct } from "../../interface";

const ProductsTab = () => {
  const [editingItem, setEditingItem] = useState<IProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [limit, setLimit] = useState(12);
  const [order, setOrder] = useState("latest");

  const { getProduct, deleteProduct } = useProducts();
  const { data, isLoading } = getProduct({ limit, order });

  const showModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleDelete = useCallback((product: IProduct) => {
    deleteProduct.mutate(product.id, {
      onSuccess: () => {
        toast.success(`Deleted`);
      },
    });
  }, []);

  const handleUpdate = useCallback((body: IProduct) => {
    setEditingItem(body);
    showModal();
  }, []);

  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
  };
  const handleOrderChange = (value: string) => {
    setOrder(value);
  };
  return (
    <section className="p-3">
      <Popap
        editingItem={editingItem}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
      <div className="flex justify-between my-2">
        <div className="flex items-center gap-5">
          <Select
            defaultValue={""}
            className="w-[200px]"
            placeholder="Select a limit"
            optionFilterProp="label"
            onChange={handleLimitChange}
            options={[
              {
                value: "",
                label: "All",
              },
              {
                value: "20",
                label: "20 Products",
              },
              {
                value: "30",
                label: "40 Products",
              },
              {
                value: "50",
                label: "60 Products",
              },
            ]}
          />
          <Select
            defaultValue={"latest"}
            className="w-[200px]"
            placeholder="Select a Order"
            optionFilterProp="label"
            onChange={handleOrderChange}
            options={[
              {
                value: "latest",
                label: "Latest",
              },
              {
                value: "expensive",
                label: "Expensive",
              },
              {
                value: "cheapest",
                label: "Cheapest",
              },
            ]}
          />
        </div>
        <Button onClick={showModal}>Add Product</Button>
      </div>
      <ItemCard
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        products={data?.allProducts}
        isLoading={isLoading}
      />
    </section>
  );
};

export default memo(ProductsTab);
