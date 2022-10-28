import { quanLyDatVeService } from "../../services/QuanLyDatVeService"
import { ThongTinDatVe } from "../../_core/models/ThongTinDatVe";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { CHUYEN_TAB, DAT_VE_HOAN_TAT, SET_CHI_TIET_PHONG_VE } from "./types/QuanLyDatVeType";



export const layChiTietPhongVeAction=(malichChieu)=>{
  return async dispatch=>{
    try{
      const result =await quanLyDatVeService.layChiTietPhongVe(malichChieu);
      console.log('result',result)
      if(result.status===200){
        dispatch({
          type:SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe:result.data.content
        })
      }
    }catch(error){
      console.log('error',error.reponse?.data)
    }
  }
}
export const datVeAction=(thongTinDatVe=new ThongTinDatVe())=>{
  return async dispatch=>{
    try{
      dispatch(displayLoadingAction)

      const result=await quanLyDatVeService.datVe(thongTinDatVe);
      console.log('result_datve',result.data.content)
      //success call api detail ticketroom
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu))

      await dispatch({type:DAT_VE_HOAN_TAT})

      await dispatch(hideLoadingAction)
      dispatch({type:CHUYEN_TAB})
    }catch(error){
      dispatch(hideLoadingAction)
      console.log('error',error.reponse?.data)

    }
  }
}