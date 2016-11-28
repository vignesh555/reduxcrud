import React from 'react'
import ButtonCreate from '../../../components/CButton'
import ModalCreate from '../../../components/CModalNew'
import SimpleForm from './SimpleForm'

class ContactPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.defaultState()
    this.onClickFnBind = this.onClickFn.bind(this)
    this.hideModalFnBind = this.hideModalFn.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getUserDetails = this.getUserDetailsFn.bind(this)

    this.props.getUserService()
  }
  handleSubmit = (values) => {
    this.props.saveUserService(values).then(
      (data) => {
        this.hideModalFn()
        this.props.resetForm('simple')
      },
      (error) => {
        console.log(error)
      }
    )
  }
  defaultState () {
    return {
      bModelOpen : false
    }
  }
  hideModalFn () {
    this.setState({
      bModelOpen : !this.state.bModelOpen
    })
  }
  onClickFn () {
    this.hideModalFn()
  }
  getUserDetailsFn (user) {
    console.log(user)
  }
  getUserList (users) {
    let self = this
    return (
      <ul>
        {users.map(function (user, index) {
          return <li onClick={() => self.getUserDetails(user)} key={index}>{user.firstName}</li>
        })}
      </ul>
    )
  }
  render () {
    const usersElement = this.getUserList(this.props.users)
    return (
      <div>
        {usersElement}
        <ButtonCreate btnClass='btn btn-primary'
          btnValue='Add User'
          btnClick={this.onClickFnBind} />
        <ModalCreate handleSubmit={this.handleSubmit}
          bIsOpen={this.state.bModelOpen}
          hideModal={this.hideModalFnBind}
          ModelBodyTemplate={SimpleForm}
          modelTitle='Create a User'
            />
      </div>
    )
  }
}
ContactPage.propTypes = {
  resetForm : React.PropTypes.func,
  getUserService : React.PropTypes.func,
  users:React.PropTypes.array,
  saveUserService:React.PropTypes.func
}

export default ContactPage
