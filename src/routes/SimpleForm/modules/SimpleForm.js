import { List, fromJS } from 'immutable'
import fetch from 'isomorphic-fetch'
import { reset } from 'redux-form'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_USERS_AFTER_SAVE = 'ADD_USERS_AFTER_SAVE'
export const GET_USERS_DATA = 'GET_USERS_DATA'
export const GET_USER_DATA = 'GET_USER_DATA'

const API_URL = 'https://api.mongolab.com/api/1/databases/angulardb1/' +
'collections/newUser?apiKey=HAv8Jy5YBlUoTTko_GP4gOVcKggMnee0'

const customHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// ------------------------------------
// Actions
// ------------------------------------
function addUsers (value = Map({})) {
  return {
    type    : ADD_USERS_AFTER_SAVE,
    payload : value
  }
}
function getUsers (value = List([])) {
  return {
    type    : GET_USERS_DATA,
    payload : value
  }
}

export const resetForm = (formName) => {
  return (dispatch, getState) => {
    dispatch(reset(formName))
  }
}

export const saveUserService = (userDetails) => {
  return (dispatch, getState) => {
    return fetch(API_URL, {
      method: 'POST',
      headers: customHeader,
      body: JSON.stringify(userDetails)
    })
    .then(response => {
      if (response.status >= 400) {
        console.log(response.status)
      }
      return response.json()
    })
    .then(json => {
      return json
    })
  }
}

export const getUserService = () => {
  return (dispatch, getState) => {
    return fetch(API_URL, {
      method: 'GET',
      headers: customHeader
    })
    .then(response => {
      if (response.status >= 400) {
        console.log(response.status)
      }
      return response.json()
    })
    .then(json => {
      dispatch(getUsers(fromJS(json)))
      // dispatch(getUsers(json))
    })
  }
}

export const actions = {
  addUsers,
  saveUserService
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_USERS_AFTER_SAVE] : (state, action) => {
    return state.push(action.payload)
  },
  [GET_USERS_DATA] : (state, action) => {
    return action.payload
  }
}
const ACTION_HANDLERS_USERS = {
  [GET_USER_DATA] : (state, action) => {
    return action.payload
  }
}

// ------------------------------------
// Reducer+
// ------------------------------------
const initialState = List([])
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

const userState = {}
export function userReducer (state = userState, action) {
  console.log('========action======')
  console.log(action)
  const handler = ACTION_HANDLERS_USERS[action.type]
  return handler ? handler(state, action) : state
}
