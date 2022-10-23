import { history } from "../../App"
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDung"
import { DANG_NHAP } from "./types/QuanLynguoiDungType"



export const dangNhapAction=(thongTinDangNhap)=>{

  return async (dispatch)=>{
    try{
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap)
      if(result.data.statusCode===200){
        dispatch({
          type:DANG_NHAP,
          thongTinDangNhap:result.data.content
        })
        console.log(result.data.content)
      }
      //chuyyển hướng đăng nhập về trang trrước đó
      history.goBack()
    }catch(error){
      console.log('error',error.response.data)
    }
  }

}