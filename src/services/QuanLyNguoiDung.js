import { api } from "../contants/api";
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyNguoiDungService extends baseService{
    constructor () {
        super()
    }

    dangNhap = (thongTinDangNhap) => {//{taiKhoan,matKhau}
        return api.post(`api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService()