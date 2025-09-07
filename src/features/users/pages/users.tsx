import { memo } from "react";
import InnerBack from "../../../shared/components/ui/innerBack/innerBack";
import UserTable from "../components/tabel/tabel";
import { USERS } from "../../../shared/static";

const Users = () => {
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
