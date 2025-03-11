import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-500 text-white p-4 flex justify-between">
    <div className="font-bold">CommunionHub</div>
    <div>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/events" className="mx-2">Events</Link>
    </div>
  </nav>
);

export default Navbar;
