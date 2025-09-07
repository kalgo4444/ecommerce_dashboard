import { memo } from "react";
import { Space, Table } from "antd";
import type { IUser } from "../../interface";

const UserTable = ({ data }: { data: IUser[] }) => {
  const { Column } = Table;

  return (
    <Table<IUser> dataSource={data} pagination={false}>
      <Column title="#" dataIndex="id" key="id" />
      <Column title="First Name" dataIndex="fname" key="fname" />
      <Column title="Last Name" dataIndex="lname" key="lname" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column title="Role" dataIndex="role" key="role" />
      <Column
        title="Action"
        render={(_: any, render: IUser) => (
          <Space size="middle">
            <button
              className="bg-blue-500 py-1 px-2 rounded text-white font-semibold hover:bg-blue-400 transition duration-200"
              onClick={() => alert(`Item id ${render.id}`)}
            >
              Update
            </button>
            <button
              className="bg-blue-500 py-1 px-2 rounded text-white font-semibold hover:bg-blue-400 transition duration-200"
              onClick={() => alert(`Item id ${render.id}`)}
            >
              Delete
            </button>
          </Space>
        )}
      />
    </Table>
  );
};

export default memo(UserTable);
