import React from "react";
import { Link } from 'react-router-dom';

function Header(props) {

  var bodyStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px"
  }

  return (
    <div style={bodyStyle}>
      <h1>Medication Tracker</h1>
      <Link to='/'>Home</Link> | <Link to="/about">About</Link>
      <hr/>
    </div>
  );
}

export default Header;
