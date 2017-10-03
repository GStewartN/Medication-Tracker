import React from "react";
import Medication from "./Medication";
import MedicationList from './MedicationList';
import NewMedControl from './NewMedControl';
import {connect} from 'react-redux';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'

class MasterMedList extends React.Component{

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
                                              handleRemovingMedicine={this.handleRemovingMedicine}/>
      }
    }

    return (
      <div>
        {contentFromFirebase}
        <NewMedControl/>
      </div>
    );
  }
}

const firebaseWrappedComponent = firebase(['/medications'])(MasterMedList);

export default connect(
  ({firebase}) => ({
    firebaseDatabaseObject: dataToJS(firebase, 'medications')
  })
)(firebaseWrappedComponent);
