import { connect } from 'react-redux'
import ContactPage from '../components/ContactPage'
import { saveUserService, resetForm, getUserService } from '../modules/SimpleForm'

const maspStateToProps = (state) => {
  console.log(state)
  return {
    users:state.users.toJS()
  }
}

const mapDispatchToProps = {
  saveUserService,
  resetForm,
  getUserService
}
export default connect(maspStateToProps, mapDispatchToProps)(ContactPage)
