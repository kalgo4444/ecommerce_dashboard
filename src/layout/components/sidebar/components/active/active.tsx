import { memo } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../../../../features/auth/store/authSlice";

const Active = () => {
  const nav = useNavigate();
  const dis = useDispatch();

  const handleClick = () => {
    dis(removeToken());
    nav("/login");
  };

  return (
    <button
      className="m-1 text-center text-xl font-semibold py-3 px-1 text-white bg-white/20 rounded transition duration-200"
      onClick={handleClick}
    >
      Log Out
    </button>
  );
};

export default memo(Active);
