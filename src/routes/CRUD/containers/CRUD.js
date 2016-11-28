import { connect } from 'react-redux'
import CRUD from '../components/CRUD'
import { saveUserService } from '../modules/CRUD'

const maspStateToProps = (state) => {
  return {
    users:state.users
  }
}

const mapDispatchToProps = {
  saveUserService
}
// console.log(saveUserService)
export default connect(maspStateToProps, mapDispatchToProps)(CRUD)
