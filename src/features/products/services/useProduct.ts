import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ICategorys } from "../interface";
import { API } from "../../../shared/api";

const productKey: string = "productKey";

interface IParams {
  limit?: number;
  skip?: number;
  order?: "latest" | "expensive" | "cheapest";
}

export const useProducts = () => {
  const queryClient = useQueryClient();

  const getProduct = (params?: IParams) =>
    useQuery<any, ICategorys>({
      queryKey: [productKey, params],
      queryFn: () =>
        API.get("product", { params })
          .then((res) => res.data)
          .then((data) => data.data),
    });

  const createProduct = useMutation<any, any, any>({
    mutationFn: (body) => API.post("product", body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKey] });
    },
  });

  const deleteProduct = useMutation<any, any, any>({
    mutationFn: (id) => API.delete(`product/${id}`).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKey] });
    },
  });

  const updateProduct = useMutation<any, any, any>({
    mutationFn: ({ id, body }) =>
      API.patch(`product/${id}`, body).then((res) => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [productKey] });
    },
  });

  return { getProduct, createProduct, deleteProduct, updateProduct };
};
