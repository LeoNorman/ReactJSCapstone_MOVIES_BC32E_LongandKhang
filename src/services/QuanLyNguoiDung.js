import { api } from "../contants/api";
export class QuanLyNguoiDungService{
    constructor () {
        
    }

    dangNhap = (thongTinDangNhap) => {//{taiKhoan,matKhau}
        return api.post(`api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }
    layThongTinNguoiDung=()=>{
        return api.post('api/QuanLyNguoiDung/ThongTinTaiKhoan');
    }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()