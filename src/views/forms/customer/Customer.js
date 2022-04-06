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
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CFormFeedback,
  CRow,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CAvatar,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsExample } from 'src/components'
import { useDispatch, useSelector } from 'react-redux'

// action
import { createCustomer } from 'src/actions/customer'
//image
import airtel from './../../../assets/images/Airtel-Icon-.jpg'
import './customer.css'

const initialState = {
  cust_ac_no: '',
  is_b2b_acc: 'n',
  parent_ac_no: '',
  root_ac_no: '',
  org_name: 'Hoonar Tekwurks Pvt Ltd',
  org_type: 'Medium',
  prename: 'mr',
  fname: '',
  mname: '',
  lname: '',
  nationality: 'india',
  email: '',
  gender: 'm',
  rtn: '',
  dob: '1990-01-01',
  pan: '',
  res_addrss: 'Pune',
  cors_addrss: 'Mumbai',
  cust_type: 'Silver',
  cust_class: 'retail',
  cust_seg: 'b2c',
  cust_cat: 'salaried',
  cust_create_dt: moment().format('YYYY-MM-DD'),
  cust_stts: 'Active',
  cust_act_dt: moment().format('YYYY-MM-DD'),
  cust_deact_dt: '9999-01-01',
  cust_ivr_lang: 'English',
  pref_comm_lang: 'English',
  pref_comm_ch: 'Email',
}

const Customer = () => {
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  var formatedDate = moment().format('YYYY-MM-DD')

  console.log(formatedDate)

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
    const form = event.currentTarget
    // console.log('FORM', form)
    // console.log('checkValidity', form.checkValidity())
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    event.preventDefault()
    setValidated(true)
    console.log(formData)
    // createCustomer
    if (formData.cust_ac_no) {
      dispatch(createCustomer(formData))
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
            <div className="row">
              <div className="col">
                <img className="header-icon" src={airtel} alt="" />
              </div>
              <div className="col d-flex text-center align-items-center justify-content-center">
                <h1>Create Customer Account</h1>
              </div>
              <div className="col text-end">
                <img className="header-icon " src={airtel} alt="" />
              </div>
            </div>
            {/* <div className="d-flex justify-content-between">
              <img className="header-icon" src={airtel} alt="" />
              <div className="d-flex align-items-center justify-content-center ps-5 heading">
                <h1>Create Customer Account</h1>
              </div>
              <img className="header-icon ms-auto" src={airtel} alt="" />
            </div> */}
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
                    <CFormLabel htmlFor="cust_ac_no">Customer Account Number</CFormLabel>
                    <CFormInput
                      name="cust_ac_no"
                      onChange={handleFormData}
                      type="text"
                      id="cust_ac_no"
                      required
                    />
                    <CFormFeedback invalid>Please provide a Customer Account Number.</CFormFeedback>
                  </CCol>
                  {/* <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="acc_lob"> Account Line Of Business</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="acc_lob"
                      type="text"
                      id="acc_lob"
                    />
                  </CCol> */}
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="is_b2b_acc">B2B Customer</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="is_b2b_acc"
                      id="is_b2b_acc"
                      defaultValue={'N'}
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="is_b2b_acc"
                      id="is_b2b_acc"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="y">N</option>
                      <option value="n">Y</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="parent_ac_no">Parent Account Number</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="parent_ac_no"
                      id="parent_ac_no"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="root_ac_no">Root Account Number</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="root_ac_no"
                      id="root_ac_no"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="prename">Salutation</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="prename"
                      id="prename"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="prename"
                      id="prename"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="mr">Mr.</option>
                      <option value="mrs">Mrs.</option>
                      <option value="miss">Miss.</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="fname">First Name</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="fname"
                      id="fname"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="mname">Middle Name</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="mname"
                      id="mname"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="lname">Last Name</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="lname"
                      id="lname"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="org_name">Organization Name</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="org_name"
                      id="org_name"
                      defaultValue={'Hoonar Tekwurks Pvt Ltd'}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="org_type">Organization Type</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="org_type"
                      id="org_type"
                      defaultValue={'Medium'}
                      // value="Medium"
                    />
                  </CCol>

                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="nationality">Nationality</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="nationality"
                      id="nationality"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="nationality"
                      id="nationality"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="india">India</option>
                      <option value="australia">Australia</option>
                      <option value="united-states-of-america">United States of America</option>
                      <option value="united-kingdom">United Kingdom</option>
                      <option value="canada">Canada</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="email">Email Address</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="email"
                      type="email"
                      id="email"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="gender">Gender</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="gender"
                      id="gender"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="gender"
                      id="gender"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="rtn">Contact Number</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="rtn"
                      id="rtn"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="dob">Date Of Birth</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="dob"
                      type="date"
                      id="dob"
                      defaultValue={'1990-01-01'}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="pan">PAN Number</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="pan"
                      id="pan"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="res_addrss">Residential Address</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="res_addrss"
                      id="res_addrss"
                      defaultValue={'Pune'}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cors_addrss">Correspondance Address</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="cors_addrss"
                      id="cors_addrss"
                      defaultValue={'Mumbai'}
                    />
                  </CCol>
                  {/* <CCol xs={6}>
                    <CFormLabel htmlFor="circle"> Circle</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="circle"
                      id="circle"
                    />
                  </CCol> */}
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_type">Customer Type</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="cust_type"
                      id="cust_type"
                      defaultValue={'Silver'}
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="cust_type"
                      id="cust_type"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                      <option value="platinum">Platinum</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_class">Customer Class</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="cust_class"
                      id="cust_class"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="cust_class"
                      id="cust_class"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="retail">Retail</option>
                      <option value="corporate">Corporate</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_seg">Customer Segment</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="cust_seg"
                      id="cust_seg"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="cust_seg"
                      id="cust_seg"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="b2c">B2C</option>
                      <option value="b2b">B2B</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_cat">Customer Category</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="cust_cat"
                      id="cust_cat"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="cust_cat"
                      id="cust_cat"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="salaried">Salaried</option>
                      <option value="business">Business</option>
                      <option value="homemaker">Homemaker</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_create_dt">Customer Creation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="cust_create_dt"
                      type="date"
                      id="cust_create_dt"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_stts">Customer Status</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="cust_stts"
                      id="cust_stts"
                      defaultValue={'Active'}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_act_dt">Customer Activation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="cust_act_dt"
                      type="date"
                      id="cust_act_dt"
                      defaultValue={formatedDate}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_deact_dt">Customer Deactivation Date</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="cust_deact_dt"
                      type="date"
                      id="cust_deact_dt"
                      value={'9999-01-01'}
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="cust_ivr_lang">IVR Language</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none', paddingRight: '0' }}
                      onChange={handleFormData}
                      name="cust_ivr_lang"
                      id="cust_ivr_lang"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="cust_ivr_lang"
                      id="cust_ivr_lang"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="marathi">Marathi</option>
                      <option value="bengali">Bengali</option>
                      <option value="gujrati">Gujrati</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="pref_comm_lang">
                      Preference Communication Language
                    </CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="pref_comm_lang"
                      id="pref_comm_lang"
                    />
                   */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="pref_comm_lang"
                      id="pref_comm_lang"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="english">English</option>
                      <option value="hindi">Hindi</option>
                      <option value="marathi">Marathi</option>
                      <option value="bengali">Bengali</option>
                      <option value="gujrati">Gujrati</option>
                    </CFormSelect>
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="pref_comm_ch">Preference Communication Channel</CFormLabel>
                    {/* <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="pref_comm_ch"
                      id="pref_comm_ch"
                    /> */}
                    <CFormSelect
                      size="md"
                      className="mb-3"
                      aria-label="Small select example"
                      name="pref_comm_ch"
                      id="pref_comm_ch"
                      onChange={handleFormData}
                    >
                      {/* <option>Salutation</option> */}
                      <option value="email">Email</option>
                      <option value="phone">Phone call</option>
                      <option value="sms">Sms Texting</option>
                      <option value="whatsapp">Whats App</option>
                    </CFormSelect>
                  </CCol>
                  {/* <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="src_lob">SRC Line Of Business</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="src_lob"
                      id="src_lob"
                    />
                  </CCol>
                  <CCol lg={3} md={6}>
                    <CFormLabel htmlFor="source_systm">Source System</CFormLabel>
                    <CFormInput
                      style={{ borderColor: '#b1b7c1', backgroundImage: 'none' }}
                      onChange={handleFormData}
                      name="source_systm"
                      id="source_systm"
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

export default Customer
