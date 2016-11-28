import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'crud',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const CRUD = require('./containers/CRUD').default
      const reducer = require('./modules/CRUD').default
      injectReducer(store, { key: 'users', reducer })
      cb(null, CRUD)
    }, 'CRUD')
  }
})
