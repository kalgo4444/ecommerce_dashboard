import { memo } from "react";
import { Button, Form, Input, Modal, type FormProps } from "antd";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/store";
import { useProduct } from "../../services/useProduct";
import {
  closeCategoryModal,
  removeEditingItem,
} from "../../store/productsSlice";

type FieldType = {
  name: string;
};

const CategoryModal = () => {
  const { createCategory, updateCategory } = useProduct();
  const { categoryModal, categoryEditingItem } = useSelector(
    (state: RootState) => state.product
  );
  const dis = useDispatch();
  console.log(categoryEditingItem);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (categoryEditingItem) {
      console.log(categoryEditingItem);
      updateCategory.mutate(
        {
          id: categoryEditingItem.id,
          body: values,
        },
        {
          onSuccess: (res) => {
            console.log(res);
            dis(closeCategoryModal());
            dis(removeEditingItem());
          },
        }
      );
    } else {
      createCategory.mutate(values, {
        onSuccess: (res) => {
          console.log(res);
          dis(closeCategoryModal());
        },
      });
    }
  };

  return (
    <Modal closable={false} footer={false} open={categoryModal}>
      <Form
        key={categoryEditingItem?.id}
        initialValues={
          categoryEditingItem ? { name: categoryEditingItem?.name } : {}
        }
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="Category Name"
          name="name"
          rules={[
            { required: true, message: "Please input your Category name!" },
          ]}
        >
          <Input style={{ height: "40px" }} />
        </Form.Item>
        <Form.Item label={null}>
          <Button
            className="w-full my-2"
            style={{ height: "42px" }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
          <Button
            onClick={() => dis(closeCategoryModal())}
            className="w-full"
            style={{ height: "40px" }}
            htmlType="button"
          >
            Close
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default memo(CategoryModal);
