import React from "react";
import { Button, Modal } from "react-bootstrap";

const ConfirmationModal = (props) => {
  const { buttonText, modalDescription, toggle, modal, title, forwardFnc } =
    props;
  return (
    <div>
      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalDescription}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggle}>
            Close
          </Button>
          <Button variant="primary" onClick={() => forwardFnc()}>
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
