import { FaHome, FaSignInAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-heading/95 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto max-w-[1920px] px-4">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <NavLink
                to="/"
                className="relative text-white hover:text-amber-300 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-amber-800/30 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/2"
                end
              >
                <span className="flex items-center gap-2">
                  <FaHome className="text-lg" />
                  Home
                </span>
              </NavLink>
              <NavLink
                to="/users"
                className="relative text-white hover:text-amber-300 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-amber-800/30 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/2"
              >
                <span className="flex items-center gap-2">
                  <FaUser className="text-lg" />
                  Users
                </span>
              </NavLink>
              <NavLink
                to="/sign-in"
                className="relative text-white hover:text-amber-300 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-amber-800/30 after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-amber-300 after:transition-all after:duration-300 hover:after:w-1/2 hover:after:left-1/2"
              >
                <span className="flex items-center gap-2">
                  <FaSignInAlt className="text-lg" />
                  Login
                </span>
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-white p-2 rounded-lg hover:bg-amber-800/30 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
