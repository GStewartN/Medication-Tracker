import React from "react";
import Medication from "./Medication";
import MedicationList from './MedicationList';
import {connect} from 'react-redux';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

class DeleteMed extends React.Component{

  constructor(props){
    super(props);
    this.handleRemovingMedicine = this.handleRemovingMedicine.bind(this);
  }

  handleRemovingMedicine(medicationId){
    const { firebase } = this.props;
    firebase.remove(`/medications/${medicationId}`);
  }

  render() {
    const { firebase, firebaseDatabaseObject } = this.props;

    let contentFromFirebase;
    if (!isLoaded(firebaseDatabaseObject)) {
      contentFromFirebase = "Loading";
    } else {
      if (isEmpty(firebaseDatabaseObject)) {
        contentFromFirebase = "No Medications Listed.";
      } else {
        let newMedArray = [];
        Object.keys(firebaseDatabaseObject).map(key => {
          newMedArray.push(Object.assign(firebaseDatabaseObject[key], {"id": key}));
        })
        contentFromFirebase = <MedicationList medicineList={newMedArray}
                                              handleRemovingMedicine={this.handleRemovingMedicine}
                                              currentRoute= {this.props.location.pathname}/>
      }
    }

    return (
      <div>
        <h1>Warning:</h1>
        <h3>Discontinuing medications without first consulting your doctor can be dangerous.</h3>
        <p>Pressing the discontinue button will remove all data associated with the medicine. It cannot be undone.</p>
        {contentFromFirebase}
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(['/medications'])(DeleteMed);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, 'medications')
  })
)(firebaseWrappedComponent);
