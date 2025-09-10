import { useQuery } from "@tanstack/react-query";
import { API } from "../../../shared/api";
import type { IUser } from "../interface";

const usersKey: string = "usersKey";

export const useUsers = () => {
  const getUsers = () =>
    useQuery<any, IUser[]>({
      queryKey: [usersKey],
      queryFn: () =>
        API.get("user")
          .then((res) => res.data)
          .then((ress) => ress.data),
    });

  return { getUsers };
};
