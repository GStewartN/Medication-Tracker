import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <h1>Medication Tracker</h1>
      <Link to='/'>Home</Link> | <Link to="/about">About</Link>
      <hr/>
    </div>
  );
}

export default Header;
