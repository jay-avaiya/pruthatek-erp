import { Outlet } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Blog from "./main_component/Blog";
import Questions from "./main_component/Questions";

export default function MainLayout() {
  return (
    <div className="flex flex-col gap-20">
      <Navbar />
      <Outlet />
      <Blog />
      <Questions />
      <Footer />
    </div>
  );
}
