import React from 'react'
import ModalCreate from '../CModal'
import ButtonCreate from '../CButton'
import FormCreate from '../CForm'

class CLeftContainer extends React.Component {
  constructor () {
    super()
    this.state = this.defaultState()
    this.hideModalFnBind = this.hideModalFn.bind(this)
    this.onClickFnBind = this.onClickFn.bind(this)
    this.saveChangesCallBackFnBind = this.saveChangesCallBackFn.bind(this)
    this.handleChangeBind = this.handleChange.bind(this)
  }
  defaultState () {
    return {
      bModelOpen : false,
      formField : {
        txtUserName : ''
      } }
  }
  handleChange (e) {
    let stateNewValue = Object.assign({}, this.state)
    stateNewValue.formField[e.target.name] = e.target.value
    this.setState(stateNewValue)
  }
  hideModalFn () {
    this.setState({
      bModelOpen : !this.state.bModelOpen
    })
  }
  onClickFn () {
    this.hideModalFnBind()
  }
  saveChangesCallBackFn () {
    this.props.saveUserServiceFn(this.state.formField).then(
      (data) => { console.log(data) },
      (error) => {
        console.log(error)
      }
    )
  }
  render () {
    console.log(this.state)
    return (
      <div>
        <ButtonCreate btnClass='btn btn-primary'
          btnValue='Add User'
          btnClick={this.onClickFnBind} />
        <ModalCreate saveChangesCallBack={this.saveChangesCallBackFnBind}
          bIsOpen={this.state.bModelOpen}
          hideModal={this.hideModalFnBind}
          ModelBodyTemplate={FormCreate}
          stateData={this.state}
          handleChange={this.handleChangeBind}
          modelTitle='Create a User'
          />
      </div>
    )
  }
}
CLeftContainer.propTypes = {
  saveUserServiceFn : React.PropTypes.func
}

export default CLeftContainer
