import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// reducers
import sideBarReducer from './reducers/sidebar'
import customerReducer from './reducers/customer'
import serviceReducer from './reducers/service'

const reducer = combineReducers({
  sideBar: sideBarReducer,
  customerR: customerReducer,
  serviceR: serviceReducer,
})

const initialState = {
  //   sidebarShow: true,
  // sideBar: {},
}

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       // console.log('changeState', state)
//       return { ...state, ...rest }
//     default:
//       return state
//   }
// }
const middleware = [thunk]
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store
