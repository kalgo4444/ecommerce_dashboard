import { memo, useState, type FC } from "react";
import { useCategory } from "../../services/useCategory";
import type { FormProps, UploadFile, UploadProps } from "antd";
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { useProducts } from "../../services/useProduct";
import { toast } from "sonner";
import type { IProduct } from "../../interface";

interface Props {
  isModalOpen: boolean;
  handleCancel: () => void;
  editingItem: IProduct | null;
}

type FieldType = {
  title: string;
  description: string;
  price: string;
  categoryId: string;
  images?: string;
  stock: string;
  brand?: string;
};

const Popap: FC<Props> = ({ isModalOpen, handleCancel, editingItem }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [files, setFiles] = useState<File[]>([]); // mana shuni sizlar backendga yuborasizlar avval Array.from qilib

  const images = files && Array.from(files);

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const fList = newFileList
      .map((file: any) => file.originFileObj as File)
      .filter(Boolean);
    setFiles(fList);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      +<div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const { createProduct, updateProduct } = useProducts();

  const { getCategory } = useCategory();
  const { data } = getCategory();

  const categories = data?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("categoryId", values.categoryId);
    formData.append("stock", values.stock);
    formData.append("brand", values.brand ? values.brand : "");
    images?.forEach((item: File) => formData.append("images", item));
    if (editingItem) {
      updateProduct.mutate(
        { id: editingItem.id, body: formData },
        {
          onSuccess: () => {
            toast.success("Success");
            setFileList([]);
            setFiles([]);
            handleCancel();
          },
        }
      );
    } else {
      createProduct.mutate(formData, {
        onSuccess: () => {
          toast.success("Success");
          setFileList([]);
          setFiles([]);
          handleCancel();
        },
      });
    }
  };

  return (
    <Modal
      closable={false}
      open={isModalOpen}
      onCancel={handleCancel}
      footer={false}
    >
      <Form
        initialValues={editingItem ? editingItem : {}}
        name="basic"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your Price!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Stock"
          name="stock"
          rules={[{ required: true, message: "Please input your Stock!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please input your Description!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item<FieldType> label="Brand" name="brand">
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please input your Category!" }]}
        >
          <Select
            defaultValue={editingItem && editingItem.category.name}
            options={categories}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Image" name="images">
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            fileList={fileList}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
        </Form.Item>

        <Form.Item label={null}>
          <Button
            className="w-full my-2"
            style={{ height: "40px" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button
            className="w-full"
            style={{ height: "40px" }}
            onClick={() => handleCancel()}
            type="default"
            htmlType="button"
          >
            Close
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(Popap);
