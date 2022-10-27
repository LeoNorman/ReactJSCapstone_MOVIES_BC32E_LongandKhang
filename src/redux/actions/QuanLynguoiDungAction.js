import { useSelector } from "react-redux"
import { history } from "../../App"
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "./types/QuanLynguoiDungType"



export const dangNhapAction=(thongTinDangNhap)=>{
  return async (dispatch)=>{
    try{
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
      if(result.data.statusCode===200){
        dispatch({
          type:DANG_NHAP,
          thongTinDangNhap:result.data.content
        })
        console.log('login',result)
      }
      //chuyyển hướng đăng nhập về trang trrước đó
      history.goBack()
    }catch(error){
      //console.log('error',error.response.data)
    }
  }

}
export const layThongTinNguoiDungAction=()=>{

  return async (dispatch)=>{
    try{
      const result = await quanLyNguoiDungService.layThongTinNguoiDung()
      if(result.data.statusCode===200){
        dispatch({
          type:SET_THONG_TIN_NGUOI_DUNG,
          thongTinNguoiDung:result.data.content
        })
        console.log('thongtinnguoidung',result.data.content)
      }
    }catch(error){
      console.log('error',error.response.data)
    }
  }

}