import isEmpty from '../../node_modules/lodash/isEmpty'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

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
    default:
      return state
  }
}
