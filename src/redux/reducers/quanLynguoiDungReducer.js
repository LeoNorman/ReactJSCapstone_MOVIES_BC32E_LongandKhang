import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP, SET_THONG_TIN_NGUOI_DUNG } from "../actions/types/QuanLynguoiDungType"

let user={};
if(localStorage.getItem(USER_LOGIN)){
  user=JSON.parse(localStorage.getItem(USER_LOGIN))
}
const stateDefault={
  userLogin:user,
  thongTinNguoiDung:{}
}


export const quanLyNguoiDungReducer=(state=stateDefault,action)=>{
  switch(action.type){
    case DANG_NHAP:{
      const {thongTinDangNhap} = action;
      localStorage.setItem(USER_LOGIN,JSON.stringify(thongTinDangNhap));
      return{...state,userLogin:thongTinDangNhap}
    }
    case SET_THONG_TIN_NGUOI_DUNG:{
      state.thongTinNguoiDung=action.thongTinNguoiDung
      return {...state}
    }
    default:
      return{...state}
  }
}