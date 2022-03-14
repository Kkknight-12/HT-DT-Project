import React from 'react'

//Forms

// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// sample route added here
const Service = React.lazy(() => import('./views/forms/service/Service'))
const Customer = React.lazy(() => import('./views/forms/customer/Customer'))

//Pages
const ServiceP = React.lazy(() => import('./views/pages/service/Service.js'))
const CustomerP = React.lazy(() => import('./views/pages/customer/Customer.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/forms', name: 'Forms', component: Service, exact: true },

  { path: '/forms/service', name: 'Service', component: Service },
  { path: '/forms/customer', name: 'Customer', component: Customer },

  //Pages
  { path: '/pages', name: 'Page', component: ServiceP, exact: true },
  { path: '/pages/service', name: 'Service', component: ServiceP },
  { path: '/pages/customer', name: 'Customer', component: CustomerP },
]

export default routes
