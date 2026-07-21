import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { GiTireIronCross } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-black text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-5">

        {/* Logo */}
        <Link to="/">
          <img
            src="/images/icons/logo.png"
            alt="ChefNest"
            style={{
              width: "90px",
              height: "90px",
              objectFit: "contain",
            }}
          />
        </Link>

{/* Desktop Menu */}
<nav className="hidden md:flex items-center gap-8">

  <Link
    to="/"
    className="text-xl hover:text-orange-500 transition"
  >
    Home
  </Link>

  <Link
    to="/book-now"
    className="text-xl hover:text-orange-500 transition"
  >
    Book Now
  </Link>

  <Link
    to="/chef-search"
    className="text-xl hover:text-orange-500 transition"
  >
    Cooks Near Me
  </Link>

  <Link
    to="/about"
    className="text-xl hover:text-orange-500 transition"
  >
    About
  </Link>

  <Link
    to="/contact"
    className="text-xl hover:text-orange-500 transition"
  >
    Contact
  </Link>

  {/* Logout */}
  <button
    onClick={handleLogout}
    className="bg-red-500 px-6 py-2 rounded-lg hover:bg-red-600 transition text-white"
  >
    Logout
  </button>

</nav>
         
        {/* Mobile Menu Button */}
        <button
          className="text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaHamburger className="w-8 h-8" />
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-72 bg-white text-black shadow-xl">

          <div className="p-6">

            <button
              onClick={() => setIsMenuOpen(false)}
              className="float-right"
            >
              <GiTireIronCross className="text-3xl" />
            </button>

            <div className="mt-16 flex flex-col space-y-6 text-lg">

              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/book-now"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>

              <Link
                to="/chef-search"
                onClick={() => setIsMenuOpen(false)}
              >
                Cooks Near Me
              </Link>

              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Logout */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleLogout();
                }}
                className="bg-red-500 text-white py-2 rounded-lg"
              >
                Logout
              </button>

            </div>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;