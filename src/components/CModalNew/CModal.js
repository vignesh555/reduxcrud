import React from 'react'
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody } from 'react-modal-bootstrap'

const CModal = (props) => {
  return (
    <Modal isOpen={props.bIsOpen} onRequestHide={props.hideModal}>
      <ModalHeader>
        <ModalClose onClick={props.hideModal} />
        <ModalTitle>{props.modelTitle}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <props.ModelBodyTemplate onSubmit={props.handleSubmit} />
      </ModalBody>
    </Modal>
  )
}

CModal.propTypes = {
  bIsOpen : React.PropTypes.bool,
  hideModal : React.PropTypes.func,
  handleSubmit : React.PropTypes.func,
  ModelBodyTemplate:React.PropTypes.func,
  modelTitle : React.PropTypes.string
}

export default CModal
