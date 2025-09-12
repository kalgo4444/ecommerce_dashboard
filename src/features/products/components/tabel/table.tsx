import { memo, useCallback, type FC } from "react";
import type { ICategorys } from "../../interface";
import { useCategory } from "../../services/useCategory";
import { useDispatch } from "react-redux";
import { openCategoryModal, setEditingItem } from "../../store/productsSlice";
import { jwtDecode, type JwtPayload } from "jwt-decode";
import { Navigate } from "react-router-dom";
import { Button, Skeleton } from "antd";
import { toast } from "sonner";

interface Props {
  body: ICategorys[] | undefined;
}

interface CustomJwtPayload extends JwtPayload {
  id: number;
}

const CustomTable: FC<Props> = ({ body }) => {
  const { deleteCategory } = useCategory();
  const dis = useDispatch();
  const handleDelete = useCallback((id: number | undefined) => {
    deleteCategory.mutate(id, {
      onSuccess: () => {
        toast.success("Deleted");
      },
    });
  }, []);

  const handleUpdate = useCallback((post: any | undefined) => {
    dis(setEditingItem(post));
    dis(openCategoryModal());
  }, []);

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  const user = jwtDecode<CustomJwtPayload>(token);

  return (
    <>
      {body ? (
        <table className="w-full border-collapse border-gray-200 shadow-sm text-center">
          <thead className="bg-gray-100">
            <tr className="h-14">
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                #
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                Name
              </th>
              <th className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">
                User
              </th>
              <th className="px-4 text-left py-2 text-sm font-semibold text-gray-700 border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {body?.map((post: ICategorys) => (
              <tr
                key={post.id}
                className="hover:bg-gray-50 transition-colors text-center h-14"
              >
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {post.id}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {post.name}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {post.user?.fname}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b">
                  {user.id === post.user?.id && (
                    <div className="flex items-center gap-3">
                      <Button
                        onClick={() => handleUpdate(post)}
                        className="px-2 py-2 bg-blue-500 text-white font-semibold rounded"
                      >
                        Update
                      </Button>
                      <Button
                        type="primary"
                        onClick={() => handleDelete(post.id)}
                        className="px-2 py-2 bg-blue-500 text-white font-semibold rounded"
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      )}
    </>
  );
};

export default memo(CustomTable);
