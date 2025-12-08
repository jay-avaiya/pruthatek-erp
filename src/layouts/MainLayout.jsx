import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
