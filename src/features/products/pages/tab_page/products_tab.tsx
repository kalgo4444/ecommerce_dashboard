import { Button } from "antd";
import { memo, useState } from "react";
import { API } from "../../../../shared/api";

const ProductsTab = () => {
  const [files, setFiles] = useState<null | FileList>(null);

  const images = files && Array.from(files);

  console.log(images);

  const handleCreateProduct = () => {
    const formData = new FormData();
    formData.append("title", "Biznes");
    formData.append("description", "OLOV");
    formData.append("price", "99999999999999999999999999999999");
    formData.append("categoryId", "1");
    formData.append("stock", "999");
    images?.forEach((item: File) => formData.append("images", item));
    API.post("product", formData);
  };
  return (
    <section className="p-3">
      <input
      className='border'
        type="file"
        onChange={(e) => setFiles(e.target.files)}
        multiple
        accept="image/*"
      />
      <div>
        {images?.map((item: File, inx: number) => (
          <img key={inx} src={URL.createObjectURL(item)} width={200} alt="" />
        ))}
      </div>

      <div className="flex justify-end my-2">
        <Button onClick={handleCreateProduct}>Add Product</Button>
      </div>
    </section>
  );
};

export default memo(ProductsTab);
