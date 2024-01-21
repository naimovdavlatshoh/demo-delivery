import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  return (
    <div className="w-100 bg-light p-3 d-flex justify-content-between align-items-center">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <div className="d-flex">
            <i className="logo_i mt-1">Comfort</i>
            <p className="logo">Delivery</p>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
