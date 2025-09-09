import { memo } from "react";
import Navigate from "./components/navigate/navigate";
import { Link } from "react-router-dom";
import Active from "./components/active/active";

const Sidebar = () => {
  return (
    <div className="sticky rounded m-2 top-2 left-0 w-[250px] h-[98vh] bg-blue-500 text-white py-5 flex flex-col">
      <Link className="text-2xl text-center block font-bold" to={"/"}>
        E-commerce <br />
        Dashboard
      </Link>
      <Navigate />
      <Active />
    </div>
  );
};

export default memo(Sidebar);
