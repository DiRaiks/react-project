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

// ------------------------------------
// Actions
// ------------------------------------
export function registrationUser(user) {
  return dispatch => {
    axios.post('/api/registration', {
      login: user.login,
      name: user.name,
      email: user.email,
      password: user.password
    })
      .then(res => {
        // localStorage.setItem('Token', res.data.token)
        // setAuthorizationToken(token);
        // dispatch(setCurrentUser(jwt.decode(res.data.token)))
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
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
const initialState = {}
export default function counterReducer(state = initialState, action) {
  switch (action.typr) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        Authorization: !isEmpty(action.payload),
        user: action.payload
      })
    default:
      return state
  }
}
