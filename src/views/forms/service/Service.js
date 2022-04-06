import React, { useState } from 'react'
import moment from 'moment'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormFeedback,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

import { useDispatch, useSelector } from 'react-redux'

// action
import { createService } from 'src/actions/service'
import airtel from './../../../assets/images/Airtel-Icon-.jpg'

import './service.css'

const initialState = {
  si: '',
  si_lob: 'prepaid',
  cust_ac_no: '',
  // source_systm: '',
  si_act_date: moment().format('YYYY-MM-DD'),
  si_deact_date: moment().add('days', 180).format('YYYY-MM-DD'),
  firstcall_date: moment().format('YYYY-MM-DD'),
  si_create_date: moment().format('YYYY-MM-DD'),
  type_lte: '',
  si_sts: 'active',
  circle: 'maharashtra',
  barr_reason: '',
  // curr_stts: '',
  ekycready: '',
  volteflag: '',
  vipflag: '',
  dnd: '',
  imsi: '',
  imei: '',
  dev_chng_dt: moment().format('YYYY-MM-DD'),
  sim_no: '',
  sim_type: 'nano',
  sim_slot_pref: '',
  hndst_4g: '',
  ir_bndle: '',
  ir_region: '',
  ir_act: '',
  stbid: '',
  stb_type: 'internet',
  vcid: '',
  pck_chg_dt: '',
  pckg: '',
  android_id: '',
  crdt_limit: '',
  data_usg_gb: '',
  // bnd_cnty: '',
  // data_cnty: '',
  // voice_cnty: '',
  // dtfup_100_cnt: '',
}

console.log(Object.keys(initialState).length)

const Service = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()
  var formatedDate = moment().format('YYYY-MM-DD')
  var nextyr_date = moment().add('days', 365).format('YYYY-MM-DD')

  // var new_date = moment().add('days', 365).format('YYYY-MM-DD')
  // console.log('new_date', new_date)
  const handleSubmit = (event) => {
    // const form = event.currentTarget
    // console.log('FORM', form.checkValidity())
    // if (form.checkValidity() === false) {
    // }
    // event.preventDefault()
    // event.stopPropagation()
    // // setValidated(true)
    // console.log(formData)
    // console.log('RANNN')
    // npx json-server --watch db.json --port 8000
    const form = event.currentTarget
    // console.log('FORM', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    event.preventDefault()
    setValidated(true)
    console.log('Service-formData', formData)
    if (formData.si && formData.si_lob && formData.cust_ac_no) {
      dispatch(createService(formData))
      setVisible(true)
    }
  }

  const handleFormData = (e) => {
    // console.log(e.target.value)
    // console.log(e.target.name)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return (
    <>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <div
          style={{
            height: '150px',
          }}
        >
          <CModalHeader onClose={() => setVisible(false)}>
            {/* <CModalTitle>Modal title</CModalTitle> */}
          </CModalHeader>
          <div className="text-center">
            <CModalBody>The Form Data has been saved successfully</CModalBody>
          </div>
          {/* <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter> */}
        </div>
      </CModal>

      <CRow>
        {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Form grid</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              More complex forms can be built using our grid classes. Use these for form layouts
              that require multiple columns, varied widths, and additional alignment options.
            </p>
            <DocsExample href="forms/layout#form-grid">
              <CRow>
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
        <CCol xs={12}>
          <CCard className="mb-4">
            {/* <CCardHeader>
              
              Create Service
            </CCardHeader> */}
            <div className="row">
              <div className="col">
                <img className="header-icon" src={airtel} alt="" />
              </div>
              <div className="col d-flex text-center align-items-center justify-content-center">
                <h1>Create Service</h1>
              </div>
              <div className="col text-end">
                <img className="header-icon" src={airtel} alt="" />
              </div>
            </div>
            <CCardBody>
              {/* <p className="text-medium-emphasis small">
              By adding <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>
              , you can have control over the gutter width in as well the inline as block direction.
            </p> */}
              {/* <DocsExample href="forms/layout#gutters">
              <CRow className="g-3">
                <CCol xs>
                  <CFormInput placeholder="First name" aria-label="First name" />
                </CCol>
                <CCol xs>
                  <CFormInput placeholder="Last name" aria-label="Last name" />
                </CCol>
              </CRow>
            </DocsExample> */}
              {/* <p className="text-medium-emphasis small">
              More complex layouts can also be created with the grid system.
            </p> */}
              <DocsExample href="">
                <CForm
                  className="row g-3 needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                >
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si">Service</CFormLabel>
                    <CFormInput onChange={handleFormData} name="si" type="text" id="si" required />
                    <CFormFeedback invalid>Please provide a Service.</CFormFeedback>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si_lob">Line Of Business</CFormLabel>
                    {/* <CFormInput
                      onChange={handleFormData}
                      type="text"
                      name="si_lob"
                      id="si_lob"
                      required
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="si_lob"
                      id="si_lob"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="prepaid">Prepaid</option>
                      <option value="postpaid">Postpaid</option>
                      <option value="dth">Dth</option>
                      <option value="telemedia">Telemedia</option>
                    </CFormSelect>
                    <CFormFeedback invalid>
                      Please provide a Service Line Of Business.
                    </CFormFeedback>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_ac_no">Customer Account Number</CFormLabel>
                    <CFormInput
                      onChange={handleFormData}
                      name="cust_ac_no"
                      id="cust_ac_no"
                      required
                    />
                    <CFormFeedback invalid>Please provide a Customer Account Number.</CFormFeedback>
                  </CCol>
                  {/* <CCol xs={6}>
                    <CFormLabel htmlFor="source_systm">Source System</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="source_systm"
                      id="source_systm"
                    />
                  </CCol> */}
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si_act_date">Service Activation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="si_act_date"
                      id="si_act_date"
                      type="date"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si_deact_date">Service Deactivation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="si_deact_date"
                      id="si_act_date"
                      type="date"
                      defaultValue={nextyr_date}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="firstcall_date">First Call Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="firstcall_date"
                      id="firstcall_date"
                      type="date"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si_create_date">Service Create Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="si_create_date"
                      id="si_create_date"
                      type="date"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="type_lte">Type LTE</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="type_lte"
                      id="type_lte"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="si_sts">SI Status</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="si_sts"
                      id="si_sts"
                      value="Active"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="circle"> Circle</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="circle"
                      id="circle"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      onChange={handleFormData}
                      name="circle"
                      id="circle"
                    >
                      {/* <option>Salutation</option> */}
                      <option value="maharashtra">Maharashtra</option>
                      <option value="gujrat">Gujrat</option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="madhyapradesh">Madhya Pradesh</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="barr_reason"> Barring Reason</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="barr_reason"
                      id="barr_reason"
                    />
                  </CCol>
                  {/* <CCol xs={6}>
                    <CFormLabel htmlFor="curr_stts"> Curr Stts</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="curr_stts"
                      id="curr_stts"
                    />
                  </CCol> */}
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="ekycready">E KYC</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="ekycready"
                      id="ekycready"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="volteflag">Volte</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="volteflag"
                      id="volteflag"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="vipflag">VIP</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="vipflag"
                      id="vipflag"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="dnd">Do Not Disturb</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="dnd"
                      id="dnd"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="imsi">IMSI</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="imsi"
                      id="imsi"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="imei">IMEI</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="imei"
                      id="imei"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="dev_chng_dt">Device Change Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="dev_chng_dt"
                      id="dev_chng_dt"
                      type="date"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="sim_no">SIM Number</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="sim_no"
                      id="sim_no"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="sim_type">SIM Type</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="sim_type"
                      id="sim_type"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      onChange={handleFormData}
                      name="sim_type"
                      id="sim_type"
                    >
                      {/* <option>Salutation</option> */}
                      <option value="nano">Nano</option>
                      <option value="esim">E-SIM</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="sim_slot_pref">SIM Slot Preference</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="sim_slot_pref"
                      id="sim_slot_pref"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="hndst_4g">4G</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="hndst_4g"
                      id="hndst_4g"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="ir_bndle">International Roaming Bundle</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="ir_bndle"
                      id="ir_bndle"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="ir_region">International Roaming Region</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="ir_region"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="ir_act">International Roaming Activation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="ir_act"
                      id="ir_act"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="stbid">STB ID</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="stbid"
                      id="stbid"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="stb_type">STB Type</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="stb_type"
                      id="stb_type"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      onChange={handleFormData}
                      name="sim_type"
                      id="sim_type"
                    >
                      {/* <option>Salutation</option> */}
                      <option value="internet">Internet</option>
                      <option value="hd">HD</option>
                      <option value="sd">SD</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="vcid">VC ID</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="vcid"
                      id="vcid"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="pck_chg_dt">Package Change Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="pck_chg_dt"
                      id="pck_chg_dt"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="pckg">Package</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="pckg"
                      id="pckg"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="android_id">Andriod ID</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="android_id"
                      id="android_id"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="crdt_limit">Credit Limit</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="crdt_limit"
                      id="crdt_limit"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="data_usg_gb">Data Limit</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="data_usg_gb"
                      id="data_usg_gb"
                    />
                  </CCol>
                  {/* <CCol xs={6}>
                    <CFormLabel htmlFor="bnd_cnty">Band Cnty</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="bnd_cnty"
                      id="bnd_cnty"
                    />
                  </CCol>
                  <CCol xs={6}>
                    <CFormLabel htmlFor="data_cnty">Data Cnty</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="data_cnty"
                      id="data_cnty"
                    />
                  </CCol>
                  <CCol xs={6}>
                    <CFormLabel htmlFor="voice_cnty">Voice Cnty</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="voice_cnty"
                    />
                  </CCol>
                  <CCol xs={6}>
                    <CFormLabel htmlFor="dtfup_100_cnt">DTF 100 Cnt</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="dtfup_100_cnt"
                      id="dtfup_100_cnt"
                    />
                  </CCol> */}
                  <CCol xs={12}>
                    <CButton type="submit">Submit</CButton>
                  </CCol>
                </CForm>
              </DocsExample>
            </CCardBody>
          </CCard>
        </CCol>
        {/* 
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Horizontal form</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Create horizontal forms with the grid by adding the <code>.row</code> class to form
              groups and using the <code>.col-*-*</code> classes to specify the width of your labels
              and controls. Be sure to add <code>.col-form-label</code> to your{' '}
              <code>&lt;CFormLabel&gt;</code>s as well so they&#39;re vertically centered with their
              associated form controls.
            </p>
            <p className="text-medium-emphasis small">
              At times, you maybe need to use margin or padding utilities to create that perfect
              alignment you need. For example, we&#39;ve removed the <code>padding-top</code> on our
              stacked radio inputs label to better align the text baseline.
            </p>
            <DocsExample href="forms/layout#horizontal-form">
              <CForm>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Email
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="email" id="inputEmail3" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                    Password
                  </CFormLabel>
                  <CCol sm={10}>
                    <CFormInput type="password" id="inputPassword3" />
                  </CCol>
                </CRow>
                <fieldset className="row mb-3">
                  <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                  <CCol sm={10}>
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios1"
                      value="option1"
                      label="First radio"
                      defaultChecked
                    />
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios2"
                      value="option2"
                      label="Second radio"
                    />
                    <CFormCheck
                      type="radio"
                      name="gridRadios"
                      id="gridRadios3"
                      value="option3"
                      label="Third disabled radio"
                      disabled
                    />
                  </CCol>
                </fieldset>
                <CRow className="mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox" />
                  </div>
                </CRow>
                <CButton type="submit">Sign in</CButton>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Horizontal form label sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Be sure to use <code>.col-form-label-sm</code> or <code>.col-form-label-lg</code> to
              your <code>&lt;CFormLabel&gt;</code>s or <code>&lt;legend&gt;</code>s to correctly
              follow the size of <code>.form-control-lg</code> and <code>.form-control-sm</code>.
            </p>
            <DocsExample href="forms/layout#horizontal-form-label-sizing">
              <CRow className="mb-3">
                <CFormLabel
                  htmlFor="colFormLabelSm"
                  className="col-sm-2 col-form-label col-form-label-sm"
                >
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="email"
                    className="form-control form-control-sm"
                    id="colFormLabelSm"
                    placeholder="col-form-label-sm"
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="colFormLabel" className="col-sm-2 col-form-label">
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput type="email" id="colFormLabel" placeholder="col-form-label" />
                </CCol>
              </CRow>
              <CRow>
                <CFormLabel
                  htmlFor="colFormLabelLg"
                  className="col-sm-2 col-form-label col-form-label-lg"
                >
                  Email
                </CFormLabel>
                <CCol sm={10}>
                  <CFormInput
                    type="email"
                    className="form-control form-control-lg"
                    id="colFormLabelLg"
                    placeholder="col-form-label-lg"
                  />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Column sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              As shown in the previous examples, our grid system allows you to place any number of{' '}
              <code>&lt;CCol&gt;</code>s within a <code>&lt;CRow&gt;</code>. They&#39;ll split the
              available width equally between them. You may also pick a subset of your columns to
              take up more or less space, while the remaining <code>&lt;CCol&gt;</code>s equally
              split the rest, with specific column classes like{' '}
              <code>&lt;CCol sm=&#34;7&#34;&gt;</code>.
            </p>
            <DocsExample href="forms/layout#column-sizing">
              <CRow className="g-3">
                <CCol sm={7}>
                  <CFormInput placeholder="City" aria-label="City" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="State" aria-label="State" />
                </CCol>
                <CCol sm>
                  <CFormInput placeholder="Zip" aria-label="Zip" />
                </CCol>
              </CRow>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Auto-sizing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              The example below uses a flexbox utility to vertically center the contents and changes{' '}
              <code>&lt;CCol&gt;</code> to <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> so that your
              columns only take up as much space as needed. Put another way, the column sizes itself
              based on the contents.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gy-2 gx-3 align-items-center">
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInput">
                    Name
                  </CFormLabel>
                  <CFormInput id="autoSizingInput" placeholder="Jane Doe" />
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingInputGroup">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="autoSizingInputGroup" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol xs="auto">
                  <CFormLabel className="visually-hidden" htmlFor="autoSizingSelect">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="autoSizingSelect">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck" label="Remember me" />
                </CCol>
                <CCol xs="auto">
                  <CButton type="submit">Submit</CButton>
                </CCol>
              </CForm>
            </DocsExample>
            <p className="text-medium-emphasis small">
              You can then remix that once again with size-specific column classes.
            </p>
            <DocsExample href="forms/layout#auto-sizing">
              <CForm className="row gx-3 gy-2 align-items-center">
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputName">
                    Name
                  </CFormLabel>
                  <CFormInput id="specificSizeInputName" placeholder="Jane Doe" />
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeInputGroupUsername">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="specificSizeInputGroupUsername" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol sm={3}>
                  <CFormLabel className="visually-hidden" htmlFor="specificSizeSelect">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="specificSizeSelect">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs="auto">
                  <CFormCheck type="checkbox" id="autoSizingCheck2" label="Remember me" />
                </CCol>
                <CCol xs="auto">
                  <CButton type="submit">Submit</CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
        {/* <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Layout</strong> <small>Inline forms</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use the <code>&lt;CCol xs=&#34;auto&#34;&gt;</code> class to create horizontal
              layouts. By adding{' '}
              <a href="https://coreui.io/docs/layout/gutters/">gutter modifier classes</a>, we will
              have gutters in horizontal and vertical directions. The{' '}
              <code>.align-items-center</code> aligns the form elements to the middle, making the{' '}
              <code>&lt;CFormCheck&gt;</code> align properly.
            </p>
            <DocsExample href="forms/layout#inline-forms">
              <CForm className="row row-cols-lg-auto g-3 align-items-center">
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormInputGroupUsername">
                    Username
                  </CFormLabel>
                  <CInputGroup>
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput id="inlineFormInputGroupUsername" placeholder="Username" />
                  </CInputGroup>
                </CCol>
                <CCol xs={12}>
                  <CFormLabel className="visually-hidden" htmlFor="inlineFormSelectPref">
                    Preference
                  </CFormLabel>
                  <CFormSelect id="inlineFormSelectPref">
                    <option>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                </CCol>
                <CCol xs={12}>
                  <CFormCheck type="checkbox" id="inlineFormCheck" label="Remember me" />
                </CCol>
                <CCol xs={12}>
                  <CButton type="submit">Submit</CButton>
                </CCol>
              </CForm>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol> */}
      </CRow>
    </>
  )
}

export default Service
