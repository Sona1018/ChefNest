import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              ChefNest
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Connecting homes with professional chefs for fresh,
              hygienic and delicious meals at your doorstep.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/book-now" className="hover:text-orange-500">
                  Monthly Home Chef
                </Link>
              </li>

              <li>
                <Link to="/book-now" className="hover:text-orange-500">
                  One-Time Chef
                </Link>
              </li>

              <li>
                <Link to="/book-now" className="hover:text-orange-500">
                  Party Chef
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/privacy-policy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <p className="text-gray-400">
              Delhi, India
            </p>

            <a
              href="mailto:sonaa18100@gmail.com"
              className="block mt-2 text-gray-400 hover:text-orange-500"
            >
              sonaa18100@gmail.com
            </a>

            <a
              href="tel:+919876543210"
              className="block mt-2 text-gray-400 hover:text-orange-500"
            >
              +91 98765 43210
            </a>

            <div className="flex gap-4 mt-6 text-xl">

              <a
                href="https://www.linkedin.com/in/sona-41b02b2a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                title="Sona"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.linkedin.com/in/shabnam-kumari-a039592b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                title="Shabnam"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-400 text-sm">
          © 2026 ChefNest. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;