import axios from 'axios'

const url = 'http://localhost:8000/'

const API = axios.create({ baseURL: url })

export const fetchAllCustomer = (data) => API.get(`/customer`, data)
export const fetchAllService = (data) => API.get(`/service`, data)
//
export const createServiceRequest = (data) => API.post(`/service`, data)
export const createCustomerRequest = (data) => API.post(`/customer`, data)
