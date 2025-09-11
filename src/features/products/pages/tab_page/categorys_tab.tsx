import { memo } from "react";
import { useProduct } from "../../services/useProduct";
import CustomTable from "../../components/tabel/table";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { openCategoryModal } from "../../store/productsSlice";
import CategoryModal from "../../components/modal/modal";

const CategorysTab = () => {
  const { getCategory } = useProduct();
  const { data } = getCategory();
  const dis = useDispatch();
  return (
    <section className="p-3">
      <div className="flex justify-end my-2">
        <Button onClick={() => dis(openCategoryModal())}>Add Category</Button>
      </div>
      <CategoryModal />
      <CustomTable body={data} />
    </section>
  );
};

export default memo(CategorysTab);
