import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">HOME</Link>
      {" | "}
      <Link to="/redux">REDUX</Link>
      {" | "}
      <Link to="/api">API</Link>
    </div>
  );
};

export default Header;
