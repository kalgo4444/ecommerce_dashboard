import { Button, Empty, Image, Skeleton } from "antd";
import { memo, type FC } from "react";
import type { IProduct } from "../../interface";
import { jwtDecode, type JwtPayload } from "jwt-decode";
import { Navigate } from "react-router-dom";

interface ItemCardProps {
  products: IProduct[] | undefined;
  isLoading: boolean;
  handleDelete: (product: IProduct) => void;
  handleUpdate: (body: IProduct) => void;
}
interface CustomJwtPayload extends JwtPayload {
  id: number;
}

const ItemCard: FC<ItemCardProps> = ({
  products,
  isLoading,
  handleDelete,
  handleUpdate,
}) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  const user = jwtDecode<CustomJwtPayload>(token);
  return (
    <>
      {isLoading ? (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5 ">
          {products?.map((item: IProduct) => (
            <div key={item.id} className="bg-neutral-100 rounded-2xl">
              <div className="w-full h-[250px] overflow-hidden rounded-2xl">
                {item.images.length ? (
                  <Image
                    loading="lazy"
                    className="w-full h-full object-cover"
                    src={
                      `https://api.errorchi.uz/product/image/` + item.images[0]
                    }
                    alt={item.title}
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-600 grid place-items-center">
                    <Empty />
                  </div>
                )}
              </div>
              <div className="px-3 py-2">
                <p className="text-lg font-semibold">{item.title}</p>
                <div className="flex items-center justify-between">
                  <b>{item.price} USD</b>
                  <span>Stock: {item.stock}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <b>{item.category.name}</b>
                  <b>{item.user.fname}</b>
                </div>
                {user.id === item.user.id && (
                  <div className="flex items-center justify-end gap-3">
                    <Button type="primary" onClick={() => handleUpdate(item)}>
                      Update
                    </Button>
                    <Button onClick={() => handleDelete(item)}>Delete</Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default memo(ItemCard);
