import axios from 'axios'

// const url = 'http://localhost:8000/'
//
// const API = axios.create({ baseURL: url })

// export const fetchAllCustomer = () => API.get(`/customer`)
// export const fetchCustomerBySearch = (key, value) => API.get(`/customer?${key}=${value}`)
export const fetchCustomerBySearch = (data) => {
  let searchTerm = Object.keys(data).filter((k) => data[k])
  let firstTerm = searchTerm[0] // key
  let role = searchTerm[searchTerm.length - 1] // key
  const { subs } = data // value
  const roleObj = { 1: 'admin', 2: 'manager', 3: 'finance' }
  const subscriberkey = roleObj[subs]
  // return API.get(`/customer?${key}=${value}`)
  return axios.get(`/v1/customer?${firstTerm}=${data[firstTerm]}&&${subscriberkey}=${subs}`)
}
export const fetchCustomerByAc = (data) => {
  let searchTerm = Object.keys(data).filter((k) => data[k])
  let firstTerm = searchTerm[0] // key
  let role = searchTerm[searchTerm.length - 1] // key
  const { subs } = data // value
  const roleObj = { 1: 'admin', 2: 'manager', 3: 'finance' }
  const subscriberkey = roleObj[subs]
  // return API.get(`/customer?${key}=${value}`)
  return axios.get(`/v1/customer/${data[firstTerm]}&&${subscriberkey}=${subs}`)
}

// export const fetchAllService = () => API.get(`/service`)
// export const fetchServiceBySearch = (key, value) => API.get(`/service?${key}=${value}`)
export const fetchServiceBySearch = (data) => {
  let searchTerm = Object.keys(data).filter((k) => data[k])
  let firstTerm = searchTerm[0] // key
  let role = searchTerm[searchTerm.length - 1] // key
  const { subs } = data // value
  const roleObj = { 1: 'admin', 2: 'manager', 3: 'finance' }
  const subscriberkey = roleObj[subs]
  //   return axios.get(`/service?${key}=${value}`)
  return axios.get(`/v1/services?${firstTerm}=${data[firstTerm]}&&${subscriberkey}=${subs}`)
}
export const fetchServiceBySI = (data) => {
  let searchTerm = Object.keys(data).filter((k) => data[k])
  let firstTerm = searchTerm[0] // key
  let role = searchTerm[searchTerm.length - 1] // key
  const { subs } = data // value
  const roleObj = { 1: 'admin', 2: 'manager', 3: 'finance' }
  const subscriberkey = roleObj[subs]
  //   return axios.get(`/service?${key}=${value}`)
  return axios.get(`/v1/services/${data[firstTerm]}&&${subscriberkey}=${subs}`)
}

//////////////////
// Post Request //
//////////////////
export const createServiceRequest = (data) =>
  axios.post(`/ht/kafkaProducer/10.1.1.55/9092/data_ingesion_queue_002`, data)
//
export const createCustomerRequest = (data) =>
  axios.post(`/ht/kafkaProducer/10.1.1.55/9092/data_ingesion_queue_cust_001`, data)
