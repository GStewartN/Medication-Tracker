import React from "react";
import Medication from "./Medication";
import PropTypes from "prop-types";

function MedicationList(props){

  var titleStyle = {
    backgroundColor: "lightgrey",
    paddingLeft: "5px",
    paddingTop: "1px"
  }

  return (
    <div style={titleStyle}>
      <h3>Medications:</h3>
      <hr/>
      {props.medicineList.map((medication, index) =>
        <Medication
          name={medication.name}
          pillDescription={medication.pillDescription}
          doctorsOrders={medication.doctorsOrders}
          key={index}
          id={medication.id}
          handleRemovingMedicine={props.handleRemovingMedicine}/>
      )}
    </div>
  );
}

MedicationList.propTypes = {
  medicineList: PropTypes.array,
  handleRemovingMedicine: PropTypes.func
};

export default MedicationList;