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
      const cData = action.payload
      let searchTerm = Object.keys(cData).filter((k) => cData[k])
      searchTerm = searchTerm[0]
      //   console.log('DATA', cData)
      console.log('searchTerm', searchTerm)
      return {
        ...state,
        customerData: state.customerData.filter((data) => data[searchTerm] === cData[searchTerm]),
        // customerData: state.customerData.filter((data) => data.cust_ac_no === cData.cust_ac_no),
      }
    default:
      return state
  }
}

export default customerReducer
