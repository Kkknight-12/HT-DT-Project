import * as api from '../api'

export const createService = (sendData) => {
  return async (dispatch, getState) => {
    // console.log('sendData', sendData)
    // const { si, content, email } = sendData;
    const data = {
      si: sendData.si,
      si_lob: sendData.si_lob,
      cust_ac_no: sendData.cust_ac_no,
      source_systm: sendData.source_systm,
      si_act_date: sendData.si_act_date,
      si_deact_date: sendData.si_deact_date,
      firstcall_date: sendData.firstcall_date,
      si_create_date: sendData.si_create_date,
      type_lte: sendData.type_lte,
      si_sts: sendData.si_sts,
      circle: sendData.circle,
      barr_reason: sendData.barr_reason,
      curr_stts: sendData.curr_stts,
      ekycready: sendData.ekycready,
      volteflag: sendData.volteflag,
      vipflag: sendData.vipflag,
      dnd: sendData.dnd,
      imsi: sendData.imsi,
      imei: sendData.imei,
      dev_chng_dt: sendData.dev_chng_dt,
      sim_no: sendData.sim_no,
      sim_type: sendData.sim_type,
      sim_slot_pref: sendData.sim_slot_pref,
      hndst_4g: sendData.hndst_4g,
      ir_bndle: sendData.ir_bndle,
      ir_region: sendData.ir_region,
      ir_act: sendData.ir_act,
      stbid: sendData.stbid,
      stb_type: sendData.stb_type,
      vcid: sendData.vcid,
      pck_chg_dt: sendData.pck_chg_dt,
      pckg: sendData.pckg,
      android_id: sendData.android_id,
      crdt_limit: sendData.crdt_limit,
      data_usg_gb: sendData.data_usg_gb,
      bnd_cnty: sendData.bnd_cnty,
      data_cnty: sendData.data_cnty,
      voice_cnty: sendData.voice_cnty,
      dtfup_100_cnt: sendData.dtfup_100_cnt,
    }
    await api.createServiceRequest(data)
  }
}

export const getAllService = (formData) => async (dispatch, getState) => {
  // console.log('formData', formData)
  const { data } = await api.fetchAllService()
  // console.log('DATA from getService', data)
  dispatch({ type: 'FETCH_ALL_SERVICE', payload: data })
}

export const getServiceSearch = (formData) => async (dispatch, getState) => {
  let searchTerm = Object.keys(formData).filter((k) => formData[k])
  searchTerm = searchTerm[0]

  const { data } = await api.fetchServiceBySearch(searchTerm, formData[searchTerm])
  dispatch({ type: 'FETCH_SERVICE_BY_SEARCH', payload: data })
}
