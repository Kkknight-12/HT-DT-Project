const serviceReducer = (state = { isLoading: true, serviceData: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true }
    case 'END_LOADING':
      return { ...state, isLoading: false }
    case 'FETCH_ALL_SERVICE':
      return {
        ...state,
        serviceData: action.payload,
      }
    case 'FETCH_SERVICE_BY_SEARCH':
      const cData = action.payload
      let searchTerm = Object.keys(cData).filter((k) => cData[k])
      searchTerm = searchTerm[0]
      // console.log('DATA', cData)
      //   console.log('searchTerm', searchTerm)
      return {
        ...state,
        serviceData: state.serviceData.filter((data) => data[searchTerm] === cData[searchTerm]),
      }
    default:
      return state
  }
}

export default serviceReducer
