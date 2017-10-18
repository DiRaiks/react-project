import axios from 'axios'
// ------------------------------------
// Constants
// ------------------------------------
// export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
// export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
export const SEARCH_CITY = 'SEARCH_CITY'

const APPID = 'da58e8be9d2780499a34927e283b3378'
const LS_PREFIX = 'cities-'
const OPENWEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather'

// ------------------------------------
// Actions
// ------------------------------------
// export function increment (value = 1) {
//   return {
//     type    : COUNTER_INCREMENT,
//     payload : value
//   }
// }

export const searchCity = (cityName) => {
  return (dispatch) => {
    return new Promise(resolve => {
      axios(OPENWEATHER_URL + '?q=' + cityName + '&APPID=' + APPID)
        .then(res => {
          console.log(res)
          dispatch({
            type: SEARCH_CITY,
            payload: res.data
          })
          resolve()
        })
        .catch(err => {
          console.log(err)
          resolve()
        })
    })
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

const initialState = {
  infoCity: {}
}
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY:
      return Object.assign({}, state, {
        infoCity: action.payload
      })
    default:
      return state
  }
}

