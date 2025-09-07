import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const nav = useNavigate();
  return (
    <div className="w-full h-screen bg-blue-500 grid place-items-center">
      <div className="max-w-xs w-full min-h-20 bg-white rounded p-2">
        <h2 className="text-3xl font-semibold my-4">404 Not Found</h2>
        <button className='w-full h-12 bg-blue-500 hover:bg-blue-400 text-lg font-bold text-white rounded transition duration-200' onClick={() => nav("/")}>Home</button>
      </div>
    </div>
  );
}
