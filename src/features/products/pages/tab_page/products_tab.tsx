import { Button } from "antd";
import { memo, useCallback, useState } from "react";
import Popap from "../../components/popap/popap";
import { useProducts } from "../../services/useProduct";
import ItemCard from "../../components/card/item-card";
import { toast } from "sonner";
import type { IProduct } from "../../interface";

const ProductsTab = () => {
  const [editingItem, setEditingItem] = useState<IProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { getProduct, deleteProduct } = useProducts();
  const { data, isLoading } = getProduct({ limit: 20 });

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

  return (
    <section className="p-3">
      <Popap
        editingItem={editingItem}
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
      />
      <div className="flex justify-end my-2">
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
