import isEmpty from 'lodash/isEmpty'
import axios from 'axios'
import jwt from 'jsonwebtoken'

// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const REGISTRATION_USER = 'REGISTRATION_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGIN_USER = 'LOGIN_USER'

// ------------------------------------
// Actions
// ------------------------------------
export function registrationUser(user) {
  return dispatch => {
    axios.post('/api/registration', user)
      .then(res => {
        dispatch({
          type: REGISTRATION_USER,
          payload: 'SUCCESS'
        })
      })
      .catch(err => {
        dispatch({
          type: REGISTRATION_USER,
          payload: 'FAIL',
          error: err.response.data.message
        })
      })
  }
}

export function loginUser(user) {
  return dispatch => {
    axios.post('/api/login', user)
      .then(res => {
        localStorage.setItem('Token', res.data.token)
        dispatch(setCurrentUser(jwt.decode(res.data.token)))
        dispatch({
          type: LOGIN_USER,
          payload: 'SUCCESS'
        })
      })
      .catch(err => {
        dispatch({
          type: LOGIN_USER,
          payload: 'FAIL',
          error: err.response.data.message
        })
      })
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

// export const doubleAsync = () => {
//   return (dispatch, getState) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         dispatch({
//           type    : COUNTER_DOUBLE_ASYNC,
//           payload : getState().counter
//         })
//         resolve()
//       }, 200)
//     })
//   }
// }


// ------------------------------------
// Action Handlers
// ------------------------------------


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  registration: false,
  login: false,
  errorLogin: {},
  errorRegistration: {}
}
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return Object.assign({}, state, {
        login: action.payload,
        errorLogin: action.error
      })
    case REGISTRATION_USER:
      return Object.assign({}, state, {
        registration: action.payload,
        errorRegistration: action.error
      })
    default:
      return state
  }
}
