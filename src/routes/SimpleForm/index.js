import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'simpleForm',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SimpleForm = require('./containers/SimpleForm').default
      const reducer = require('./modules/SimpleForm').default
      const userReducer = require('./modules/SimpleForm').userReducer
      console.log(reducer)
      injectReducer(store, { key: 'users', reducer })
      injectReducer(store, { key: 'user', userReducer })
      cb(null, SimpleForm)
    }, 'SimpleForm')
  }
})
