import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="container mx-auto max-w-[1920px]">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
