import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar cartItemCount={2} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
