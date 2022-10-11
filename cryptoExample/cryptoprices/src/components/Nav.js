import { Link } from "react-router-dom";

import React from "react";

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>CryptoPrices</div>
      </Link>
      {/* -------------------------------- */}
      <Link to="/currencies">
        <div>Current -Cies</div>
      </Link>
    </div>
  );
}

export default Nav;
