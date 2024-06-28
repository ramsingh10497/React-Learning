import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div>
      <nav>
        <ul>
          <br />
          <Link to="/">Go to Home Page</Link>
          <br />
          <Link to="/contact">Go to Contact Page</Link>
          <br />
          <Link to="/about">Go to About Page</Link>
          <button onClick={() => handleNavigate("/")}>Home with Button</button>
          <button onClick={() => handleNavigate("/contact")}>
            Contact with Button
          </button>
          <button onClick={() => handleNavigate("/about")}>
            About with Button
          </button>
        </ul>
        <main>
          <Outlet /> {/* Placeholder for route content */}
        </main>
      </nav>
    </div>
  );
};

export default Layout;
