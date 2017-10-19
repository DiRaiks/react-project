import axios from 'axios'
// ------------------------------------
// Constants
// ------------------------------------
export const SEARCH_CITY = 'SEARCH_CITY'

const APPID = 'da58e8be9d2780499a34927e283b3378'
const LS_PREFIX = 'cities-'
const OPENWEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather'

// ------------------------------------
// Actions
// ------------------------------------

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

// export const createPost = (id, text) => {
//   return (dispatch) => {
//     return new Promise(resolve => {
//       axios(,{id: id, text: text})
//         .then(res => {
//           console.log(res)
//           // dispatch({
//           //   type: SEARCH_CITY,
//           //   payload: res.data
//           // })
//           resolve()
//         })
//         .catch(err => {
//           console.log(err)
//           resolve()
//         })
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

