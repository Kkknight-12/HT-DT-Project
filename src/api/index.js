import axios from 'axios'

const url = 'http://localhost:8000/'

const API = axios.create({ baseURL: url })

export const fetchAllCustomer = () => API.get(`/customer`)
export const fetchCustomerBySearch = (key, value) => API.get(`/customer?${key}=${value}`)
export const fetchAllService = () => API.get(`/service`)
export const fetchServiceBySearch = (key, value) => API.get(`/service?${key}=${value}`)
//
export const createServiceRequest = (data) => API.post(`/service`, data)
export const createCustomerRequest = (data) => API.post(`/customer`, data)
