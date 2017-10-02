import React from "react";
import MedicationList from './MedicationList';
import NewMedControl from './NewMedControl';
import {connect} from 'react-redux';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase'

class MasterMedList extends React.Component{

  constructor(props){
    super(props);
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
        contentFromFirebase = <MedicationList medicineList={newMedArray}/>
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
