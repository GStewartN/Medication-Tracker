import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function Medication(props) {

  var medStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px"
  }

  var removeButtonStyle = {
    marginRight: "5px"
  }

  let medicineDetails =
    <div style={medStyle}>
      <h3>{props.name}</h3>
      <h5>Medicine/Pill Description:</h5>
      <p>{props.pillDescription}</p>
      <h5>Doctors Orders:</h5>
      <p>{props.doctorsOrders}</p>
    </div>
  if (props.currentRoute === "/delete"){
    return(
      <div>
        {medicineDetails}
        <Button
          style={removeButtonStyle}
          bsSize="small"
          bsStyle="danger"
          onClick={() => {props.handleRemovingMedicine(props.id)}}>Discontinue Medicine</Button>
        <hr/>
      </div>
    );
  } else {
    return(
      <div>
        {medicineDetails}
        <Button>Take Medicine</Button>
        <hr/>
      </div>
    );
  }
}

Medication.propTypes = {
  name: PropTypes.string.isRequired,
  pillDescription: PropTypes.string.isRequired,
  doctorsOrders: PropTypes.string.isRequired,
  handleRemovingMedicine: PropTypes.func,
  currentRoute: PropTypes.string
};

export default Medication;
