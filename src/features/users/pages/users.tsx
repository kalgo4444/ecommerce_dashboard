import { memo } from "react";
import InnerBack from "../../../shared/components/ui/innerBack/innerBack";
import UserTable from "../components/tabel/tabel";
import { useUsers } from "../services/useUsers";

const Users = () => {
  const { getUsers } = useUsers();
  const { data: USERS } = getUsers();

  return (
    <>
      <title>Dashboard | Users</title>
      <InnerBack>
        <UserTable data={USERS} />
      </InnerBack>
    </>
  );
};

export default memo(Users);
