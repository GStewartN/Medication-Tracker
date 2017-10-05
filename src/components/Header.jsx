import React from "react";
import { Link } from "react-router-dom";

function Header(props) {

  const bodyStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px",
    marginBottom: "10px"
  }

  const titleStyle = {
    textAlign: "center"
  }

  return (
    <div style={bodyStyle}>
      <h1 style={titleStyle}>Medication Tracker</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/delete">Discontinue Medicine</Link>
    </div>
  );
}

export default Header;
