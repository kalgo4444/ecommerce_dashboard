import { memo, type FC } from "react";
import { Skeleton, Table } from "antd";
import type { IUser } from "../../interface";

interface Props {
  data: IUser[] | undefined;
}

const UserTable: FC<Props> = ({ data }) => {
  const { Column } = Table;

  

  return (
    <>
      {data ? (
        <Table<IUser> dataSource={data} pagination={false}>
          <Column title="#" dataIndex="id" key="id" />
          <Column title="First Name" dataIndex="fname" key="fname" />
          <Column title="Last Name" dataIndex="lname" key="lname" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Role" dataIndex="role" key="role" />
        </Table>
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

export default memo(UserTable);
