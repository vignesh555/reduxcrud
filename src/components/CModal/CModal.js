import React from 'react'
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from 'react-modal-bootstrap'

const CModal = (props) => {
  return (
    <Modal isOpen={props.bIsOpen} onRequestHide={props.hideModal}>
      <ModalHeader>
        <ModalClose onClick={props.hideModal} />
        <ModalTitle>{props.modelTitle}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <props.ModelBodyTemplate propValue={props} />
      </ModalBody>
      <ModalFooter>
        <button className='btn btn-default' onClick={props.hideModal}>
          Close
        </button>
        <button className='btn btn-primary' onClick={props.saveChangesCallBack}>
          Save changes
        </button>
      </ModalFooter>
    </Modal>
  )
}

CModal.propTypes = {
  bIsOpen : React.PropTypes.bool,
  hideModal : React.PropTypes.func,
  saveChangesCallBack : React.PropTypes.func,
  ModelBodyTemplate:React.PropTypes.func,
  modelTitle : React.PropTypes.string
}

export default CModal
