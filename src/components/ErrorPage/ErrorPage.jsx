import { Link } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { FaArrowLeft } from "react-icons/fa6";
import errorImg from "../../assets/images/404/404.gif";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center gap-0 pt-10">
        <Link
          to="/"
          className="font-rancho text-3xl text-heading-2 [text-shadow:0_4px_9px_rgba(59,29,26,0.8)] flex gap-2 items-center justify-center"
        >
          <FaArrowLeft className="text-xl" /> Back to Home
        </Link>
        <img src={errorImg} alt="Error Image" />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
