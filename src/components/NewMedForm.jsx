import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import c from './../constants/constants';
import { firebaseConnect } from 'react-redux-firebase';

class NewMedForm extends React.Component {

  constructor(props){
    super(props);
    this.handleNewMedFormSubmission = this.handleNewMedFormSubmission.bind(this);
  }

  handleNewMedFormSubmission(event) {
    event.preventDefault()
    const { _name, _pillDescription, _doctorsOrders, _sideEffects } = this.refs;
    const { firebase } = this.props;
       firebase.push('/medications', {
         name: _name.value,
         pillDescription: _pillDescription.value,
         doctorsOrders: _doctorsOrders.value,
         sideEffects: _sideEffects.value,
         timeTaken: new Date().getTime()
       })
    this.props.hideFormAfterSubmission();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleNewMedFormSubmission}>
          <textarea
            ref="_name"
            type="text"
            id="name"
            placeholder="Medicine Name"/>
          <textarea
            ref="_pillDescription"
            type="text"
            id="pillDescription"
            placeholder="Pill Description"/>
          <textarea
            ref="_doctorsOrders"
            type="text"
            id="doctorsOrders"
            placeholder="Doctors Orders"/>
            <textarea
              ref="_sideEffects"
              type="text"
              id="sideEffects"
              placeholder="Known Side Effects"/>
          <button type="submit">Add Medicine</button>
        </form>

      </div>
    );
  }

}

NewMedForm.propTypes = {
  hideFormAfterSubmission: PropTypes.func
}

const firebaseWrappedNewMedForm = firebaseConnect(['/medications'])(NewMedForm)
export default connect()(firebaseWrappedNewMedForm)
