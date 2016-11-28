import { List } from 'immutable'
import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_USERS_AFTER_SAVE = 'ADD_USERS_AFTER_SAVE'
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
      console.log(json)
      return json
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
