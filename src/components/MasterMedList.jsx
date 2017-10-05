import React from "react";
import Medication from "./Medication";
import MedicationList from './MedicationList';
import NewMedControl from './NewMedControl';
import {connect} from 'react-redux';
import { firebase, isLoaded, isEmpty, dataToJS } from 'react-redux-firebase';

class MasterMedList extends React.Component{

  constructor(props){
    super(props);
    this.updateTimeSinceTaken = this.updateTimeSinceTaken.bind(this);
  }

  componentDidMount(){
    this.timeSinceTakenChecker = setInterval(() =>
      this.updateTimeSinceTaken(),
    );
  }

  updateTimeSinceTaken(){
    this.forceUpdate();
  }

  componentWillUnmount(){
    clearInterval(this.timeSinceTakenChecker);
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
        <NewMedControl/>
        {contentFromFirebase}
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
