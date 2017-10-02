import React from "react";
import PropTypes from "prop-types";

function Medication(props) {
  return(
    <div>
      <h3>{props.name}</h3>
      <p>{props.pillDescription}</p>
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
