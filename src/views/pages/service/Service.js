import React, { useState, useEffect } from 'react'
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
  CFormSelect,
} from '@coreui/react'

import { useSelector, useDispatch } from 'react-redux'

// actions
import { getAllService, getServiceSearch, getServiceFormSearch } from 'src/actions/service'

//
import './service.css'

const initialState = {
  imei: '',
  imsi: '',
  vcid: '',
  android_id: '',
  subs: '1',
}
const serviceInitialState = {
  si: '',
  subs: '1',
}

export default function Service() {
  const [formData, setFormData] = useState(initialState)
  const [serviceformData, setServiceFormData] = useState(serviceInitialState)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const serviceR = useSelector((state) => state.serviceR)
  const { serviceData } = serviceR
  // console.log('serviceData', serviceData)

  const handleSubmit = (event) => {
    event.preventDefault()
    // DISPATCH ACTION
    dispatch(getServiceFormSearch(formData))
  }

  const handleServiceFormSubmit = (event) => {
    event.preventDefault()
    // DISPATCH ACTION
    dispatch(getServiceSearch(serviceformData))
  }

  const handleShowCol = () => {
    setShow(!show)
  }

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleServiceFormData = (e) => {
    setServiceFormData({ ...serviceformData, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    dispatch(getAllService(formData))
  }, [dispatch, formData])

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              {/* <strong>Create</strong> <small>Gutters</small> */}
              Search Service
            </CCardHeader>
            <CCardBody>
              <CForm className="row g-3" onSubmit={handleServiceFormSubmit}>
                {/* <strong>Create</strong> <small>Gutters</small> */}
                <CCol md={6}>
                  <CFormLabel htmlFor="si">Service Instance (SI)</CFormLabel>
                  <CFormInput onChange={handleServiceFormData} name="si" type="text" id="si" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="subs">Subscribe</CFormLabel>
                  <CFormSelect
                    size="md"
                    className="mb-3"
                    aria-label="Small select example"
                    name="subs"
                    id="subs"
                    onChange={handleServiceFormData}
                  >
                    <option value="1">Admin</option>
                    <option value="2">Manager</option>
                    <option value="3">Finance</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">Search</CButton>
                </CCol>
              </CForm>
            </CCardBody>
            <CCardBody>
              <CForm className="row g-3" onSubmit={handleSubmit}>
                <CCol md={6}>
                  <CFormLabel htmlFor="imei">IMEI</CFormLabel>
                  <CFormInput onChange={handleFormData} name="imei" type="text" id="imei" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="imsi">IMSI</CFormLabel>
                  <CFormInput onChange={handleFormData} name="imsi" type="text" id="imsi" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="vcid">VCID</CFormLabel>
                  <CFormInput onChange={handleFormData} name="vcid" type="text" id="vcid" />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="aid">Android ID</CFormLabel>
                  <CFormInput
                    onChange={handleFormData}
                    name="android_id"
                    type="text"
                    id="android_id"
                  />
                </CCol>
                <CCol md={6}>
                  <CFormLabel htmlFor="subs">Subscribe ***</CFormLabel>
                  <CFormSelect
                    size="md"
                    className="mb-3"
                    aria-label="Small select example"
                    name="subs"
                    id="subs"
                    onChange={handleFormData}
                  >
                    <option value="1">Admin</option>
                    <option value="2">Manager</option>
                    <option value="3">Finance</option>
                  </CFormSelect>
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
              <CTableHeaderCell scope="col">Service</CTableHeaderCell>
              <CTableHeaderCell scope="col">Service Line Of Business</CTableHeaderCell>
              <CTableHeaderCell scope="col">Customer Account Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Source System</CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Service Activation Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Service Deactivation Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                First Call Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Service Create Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Type LTE
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Service STS
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Circle
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Barred Reason
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Curr Stts
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                E Kyc Ready
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Volte Flag
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Vip Flag
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Dnd
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                IMSI
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                IMEI
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Dev Change Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Sim Number
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Sim Type
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Sim Slot
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Handset 4g
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                R Bundle
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Ir Region
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Ir Act
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Stbid
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Stb Type
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Vc Id
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Package Change Date
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Package
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Andriod Id
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Credit Limit
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Data Usage in Gb
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Band Cnty
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                Voice Cnty
              </CTableHeaderCell>
              <CTableHeaderCell className={!show ? 'hide' : ''} scope="col">
                DTF 100 Cnt
              </CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {serviceData?.map((data, index) => (
              <CTableRow key={data.id}>
                <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                <CTableDataCell>{data.si || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.si_lob || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.cust_ac_no || 'NA'}</CTableDataCell>
                <CTableDataCell>{data.source_systm || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.si_act_date || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.si_deact_date || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.firstcall_date || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.si_create_date || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.type_lte || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.si_sts || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.circle || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.barr_reason || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.curr_stts || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.ekycready || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.volteflag || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.vipflag || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.dnd || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.imsi || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.imei || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.dev_chng_dt || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.sim_no || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.sim_type || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.sim_slot_pref || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.hndst_4g || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.r_bndle || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.ir_region || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.ir_act || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.stbid || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.stb_type || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.vcid || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.pck_chg_dt || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>{data.pckg || 'NA'}</CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.android_id || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.crdt_limit || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.data_usg_gb || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.bnd_cnty || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.voice_cnty || 'NA'}
                </CTableDataCell>
                <CTableDataCell className={!show ? 'hide' : ''}>
                  {data.dtfup_100_cnt || 'NA'}
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
    </>
  )
}
