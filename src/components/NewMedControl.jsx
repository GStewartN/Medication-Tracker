import React from "react";
import NewMedForm from "./NewMedForm";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

class NewMedControl extends React.Component {

  constructor(props) {
    super(props);
    this.showFormModal = this.showFormModal.bind(this);
    this.hideFormModal = this.hideFormModal.bind(this);
    this.state = {formModalIsShowing: false};
  }

  showFormModal() {
    this.setState({formModalIsShowing: true});
  }

  hideFormModal() {
    this.setState({formModalIsShowing: false});
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.showFormModal}>
          Add New Medicine
        </Button>
        <Modal
          show={this.state.formModalIsShowing}
          onHide={this.hideFormModal}
          bsSize="large">
          <Modal.Header>
            <Modal.Title>Add Medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewMedForm
              hideFormAfterSubmission = {this.hideFormModal}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default NewMedControl;
