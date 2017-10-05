import React from "react";
import Medication from "./Medication";
import PropTypes from "prop-types";

function MedicationList(props){

  const titleStyle = {
    backgroundColor: "lightgrey",
    marginBottom: "10px",
    paddingTop: "1px"
  }

  const subStyle = {
    textAlign: "center"
  }

  return (
    <div style={titleStyle}>
      <h3 style={subStyle}>Medications:</h3>
      
      {props.medicineList.map((medication, index) =>
        <Medication
          name={medication.name}
          pillDescription={medication.pillDescription}
          doctorsOrders={medication.doctorsOrders}
          sideEffects={medication.sideEffects}
          timeTaken={medication.timeTaken}
          key={index}
          id={medication.id}
          handleRemovingMedicine={props.handleRemovingMedicine}
          currentRoute={props.currentRoute}/>
      )}
    </div>
  );
}

MedicationList.propTypes = {
  medicineList: PropTypes.array,
  handleRemovingMedicine: PropTypes.func,
  currentRoute: PropTypes.string
};

export default MedicationList;
