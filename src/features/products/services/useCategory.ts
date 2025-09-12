import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { ICategorys } from "../interface";
import { API } from "../../../shared/api";

const categoryKey: string = "categoryKey";

export const useCategory = () => {
  const queryClient = useQueryClient();
  const getCategory = () =>
    useQuery<any, ICategorys>({
      queryKey: [categoryKey],
      queryFn: () =>
        API.get("category")
          .then((res) => res.data)
          .then((data) => data.data),
    });

  const createCategory = useMutation<any, any, any>({
    mutationFn: (body) => API.post("category", body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [categoryKey] });
    },
  });

  const deleteCategory = useMutation<any, any, any>({
    mutationFn: (id: number) => API.delete(`category/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [categoryKey] });
    },
  });

  const updateCategory = useMutation<any, any, { id: number; body: any }>({
    mutationFn: ({ id, body }) => API.patch(`category/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [categoryKey] });
    },
  });

  return { getCategory, createCategory, deleteCategory, updateCategory };
};
