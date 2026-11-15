import logo from "../../../assets/images/more/logo1.png";
import bgImage from "../../../assets/images/more/header-bg.jpg";

const Header = () => {
  return (
    <div
      className="flex justify-center items-center py-3.75 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <img className="w-18.75 h-22.5" src={logo} alt="Logo" />
      <h2 className="font-rancho text-6xl inline-block text-white">
        Espresso Emporium
      </h2>
    </div>
  );
};

export default Header;
