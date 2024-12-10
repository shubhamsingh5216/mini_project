import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 text-xl">
      <ul className="flex gap-10 justify-center space-x-4">
        <li>
          <Link to="/" className="hover:underline cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline cursor-pointer">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:underline cursor-pointer">
            Services
          </Link>
        </li>
        <li>
          <Link to="/payments" className="hover:underline cursor-pointer">
            Payments
          </Link>
        </li>
        <li>
          <Link to="/profile" className="hover:underline cursor-pointer">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
