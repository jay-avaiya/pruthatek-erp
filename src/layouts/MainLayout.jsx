import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./main_component/Navbar";
import Footer from "./main_component/Footer";
import Blog from "./main_component/Blog";
import Questions from "./main_component/Questions";

export default function MainLayout() {
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blog");

  return (
    <div className="flex flex-col gap-16">
      <Navbar />
      <Outlet />
      {!isBlog && <Blog />}
      <Questions />
      <Footer />
    </div>
  );
}
