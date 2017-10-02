import React from "react";
import PropTypes from "prop-types";

function Medication(props) {
  var medStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px"
  }

  return(
    <div style={medStyle}>
      <h3>{props.name}</h3>
      <h5>Medicine/Pill Description:</h5>
      <p>{props.pillDescription}</p>
      <h5>Doctors Orders:</h5>
      <p>{props.doctorsOrders}</p>
      <hr/>
    </div>
  );
}

Medication.propTypes = {
  name: PropTypes.string.isRequired,
  pillDescription: PropTypes.string.isRequired,
  doctorsOrders: PropTypes.string.isRequired
};

export default Medication;
