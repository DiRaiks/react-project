import isEmpty from '../../node_modules/lodash/isEmpty'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const CHANGE_AUTH_STATUS = 'CHANGE_AUTH_STATUS'

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export function changeAuthStatus() {
  return {
    type: CHANGE_AUTH_STATUS,
    payload: false
  }
}

const initialState = {
  Authorization: false,
  user: {}
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        Authorization: !isEmpty(action.payload),
        user: action.payload
      })
    case CHANGE_AUTH_STATUS:
      return Object.assign({}, state, {
        Authorization: false,
        user: {}
      })
    default:
      return state
  }
}
