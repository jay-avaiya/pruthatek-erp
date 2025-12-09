import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
