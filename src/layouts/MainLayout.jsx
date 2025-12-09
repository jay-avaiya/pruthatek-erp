import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Blog from "./main_component/Blog";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Blog />
      <Footer />
    </div>
  );
}
