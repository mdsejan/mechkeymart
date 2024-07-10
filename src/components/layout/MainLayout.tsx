import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Container from "../Container";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar cartItemCount={2} />
      <Container>
        <div className="min-h-[50vh]">
          <Outlet />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
