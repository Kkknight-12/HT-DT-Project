const customerReducer = (state = { isLoading: true, customerData: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case 'FETCH_ALL_CUSTOMER':
      //   console.log('postReducer', action.payload)
      return {
        ...state,
        customerData: action.payload,
      }
    case 'FETCH_BY_SEARCH':
      return {
        ...state,
        customerData: action.payload,
      }
    default:
      return state
  }
}

export default customerReducer
