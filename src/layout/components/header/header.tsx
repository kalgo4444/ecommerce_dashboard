import { memo } from "react";
import { useLocation } from "react-router-dom";
import { headerTitle } from "../../../shared/config/header.title";
import Active from "../sidebar/components/active/active";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="w-full h-16 bg-blue-500 z-50 rounded-2xl shadow-md sticky top-2 left-0 flex items-center justify-between px-5">
      <div className="text-2xl text-white font-bold">
        {headerTitle(pathname)}
      </div>
      <div>
        <Active />
      </div>
    </header>
  );
};

export default memo(Header);
