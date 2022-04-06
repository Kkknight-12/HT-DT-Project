import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTable,
  CRow,
} from '@coreui/react'

import { useSelector, useDispatch } from 'react-redux'

// actions
import { getAllCustomer, getCustomerFormSearch, getCustomerSearch } from 'src/actions/customer'

import './customer.css'
import { useEffect } from 'react'

const initialState = {
  email: '',
  rtn: '',
  pan: '',
}
const customerInitialState = {
  cust_ac_no: '',
}

export default function Customer() {
  const [formData, setFormData] = useState(initialState)
  const [formCustomerData, setCustomerFormData] = useState(customerInitialState)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const customerR = useSelector((state) => state.customerR)
  const { customerData } = customerR
  // console.log('customerData', customerData)
  // const keys = Object.keys(customerData[0])
  // console.log('KEYS', keys)

  const handleShowCol = () => {
    setShow(!show)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // DISPATCH ACTION
    dispatch(getCustomerFormSearch(formData))
  }
  const handleCustomerSubmit = (event) => {
    event.preventDefault()
    // DISPATCH ACTION
    dispatch(getCustomerSearch(formCustomerData))
  }

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleCustomerFormData = (e) => {
    setCustomerFormData({ ...formCustomerData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    dispatch(getAllCustomer(formData))
  }, [dispatch, formData])
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              {/* <strong>Create</strong> <small>Gutters</small> */}
              Search Customer
            </CCardHeader>
            <CCardBody>
              <CForm className="row g-3" onSubmit={handleCustomerSubmit}>
                <CCol md={6}>
                  <CFormLabel htmlFor="cust_ac_no">Customer Acccount Number</CFormLabel>
                  <CFormInput
                    onChange={handleCustomerFormData}
                    name="cust_ac_no"
                    type="text"
                    id="can"
                  />
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">Search</CButton>
                </CCol>
              </CForm>
            </CCardBody>
            <CCardBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                {/* <strong>Create</strong> <small>Gutters</small> */}

                <CCol md={6}>
                  <CFormLabel htmlFor="email">Email</CFormLabel>
                  <CFormInput onChange={handleFormData} name="email" type="email" id="emailc" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="rtn">Registered Telephone Number</CFormLabel>
                  <CFormInput onChange={handleFormData} name="rtn" type="text" id="rtn" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="pan">PAN Number</CFormLabel>
                  <CFormInput onChange={handleFormData} name="pan" type="text" id="pan" />
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">Search</CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <div className="d-flex justify-content-end">
        <button onClick={handleShowCol} className="btn btn-primary mb-2 ">
          {!show ? 'Show Col' : 'Hide Col'}
        </button>
      </div>
      <div style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        <CTable bordered responsive="md">
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell scope="col">#</CTableHeaderCell>
              <CTableHeaderCell scope="col">Customer Account Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Account Line Of Business</CTableHeaderCell>
              <CTableHeaderCell scope="col">Is b2b Account</CTableHeaderCell>
              <CTableHeaderCell scope="col">Parent Account Number</CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Root Account Number
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Organization Name
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Organization Type
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Pre Name
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                First Name
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Middle Name
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Last Name
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Nationality
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Email
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Gender
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                RTN
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Date Of Birth
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                PAN
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Residential Address
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Cors Address
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Circle
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Type
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Class
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Segment
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Category
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Create Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer stts
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Activation Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer Deactivation Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Customer IVR Language
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Preference Communication Language
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Preference Communication Channel
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                SRC Line Of Business
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Source System
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {customerData?.map((data, index) => (
              <CTableRow key={data.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{data.cust_ac_no || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.acc_lob || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.is_b2b_acc || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.parent_ac_no || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.root_ac_no || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.org_name || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.org_type || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.prename || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.fname || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.mname || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.lname || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.nationality || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.email || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.gender || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.rtn || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.dob || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.pan || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.res_addrss || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cors_addrss || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.circle || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_type || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_class || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_seg || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_cat || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_create_dt || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_stts || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_act_dt || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_deact_dt || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.cust_ivr_lang || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.pref_comm_lang || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.pref_comm_ch || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.src_lob || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.source_systm || 'NA'}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </>
  )
}
