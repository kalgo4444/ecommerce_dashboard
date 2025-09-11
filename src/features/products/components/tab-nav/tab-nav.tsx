import { memo } from "react";
import { NavLink } from "react-router-dom";

const TabNav = () => {
  return (
    <ul className="flex items-center border-b border-neutral-200 h-10">
      <li>
        <NavLink
          end={true}
          className={
            "tab_link px-15 py-2 duration-200 border-b-2 border-transparent hover:text-blue-400 rounded-t-md"
          }
          to={"/products"}
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            "tab_link px-15 py-2 duration-200 border-b-2 border-transparent hover:text-blue-400 rounded-t-md"
          }
          to={"category"}
        >
          Category
        </NavLink>
      </li>
    </ul>
  );
};

export default memo(TabNav);
