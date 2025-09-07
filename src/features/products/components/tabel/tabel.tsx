import { memo } from "react";
import { Space, Table } from "antd";
import type { IProduct } from "../../interface";

const ProductTable = ({ data }: { data: IProduct[] }) => {
  const { Column } = Table;

  return (
    <Table<IProduct> dataSource={data} pagination={false}>
      <Column title="#" dataIndex="id" key="id" />
      <Column title="#categoryId" dataIndex="categoryId" key="categoryId" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column title="Description" dataIndex="description" key="description" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Stock" dataIndex="stock" key="stock" />
      <Column title="Brand" dataIndex="brand" key="brand" />
      <Column title="Image" dataIndex="image" key="image" />
      <Column
        title="Action"
        render={(_: any, render: IProduct) => (
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

export default memo(ProductTable);
