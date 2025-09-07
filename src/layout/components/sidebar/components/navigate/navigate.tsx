import { memo } from "react";
import { NAVLINK } from "../../../../../shared/static";
import { NavLink } from "react-router-dom";

const Navigate = () => {
  return (
    <nav className="flex flex-col mt-5 flex-1">
      {NAVLINK?.map((link, inx: number) => (
        <NavLink
          key={inx}
          className="nav__link text-xl font-semibold py-3 px-1"
          to={link.label}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default memo(Navigate);
