import { memo } from "react";
import Navigate from "./components/navigate/navigate";

const Sidebar = ({ data }: { data: any }) => {
  return (
    <div className="sticky rounded-2xl shadow-md m-2 top-2 left-0 w-[250px] h-[98vh] bg-blue-500 text-white py-5 flex flex-col">
      <div className="flex items-center gap-3 px-5">
        <div className="size-10 bg-white rounded-full text-blue-500 grid place-items-center font-bold">
          {data?.fname.slice(0, 1)}
        </div>
        <div className="flex flex-col">
          <b>{data?.fname}</b>
          <small>{data?.role || "Admin"}</small>
        </div>
      </div>
      <Navigate />
    </div>
  );
};

export default memo(Sidebar);
