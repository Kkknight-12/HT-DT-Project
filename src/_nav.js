import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes, cilStar } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Service',
        to: '/forms/service',
      },
      {
        component: CNavItem,
        name: 'Customer',
        to: '/forms/customer',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Customer',
        to: '/pages/customer',
      },
      {
        component: CNavItem,
        name: 'Service',
        to: '/pages/service',
      },
    ],
  },
]

export default _nav
