import { api } from "../contants/api";
import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
export class QuanLyDatVeService{
    constructor () {
    }

    layChiTietPhongVe = (maLichChieu) => {//max lich chiếu lấy từ url
        return api.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    }
    datVe=(thongTinDatVe=new ThongTinDatVe())=>{
        return api.post(`api/QuanLyDatVe/DatVe`,thongTinDatVe)
    }
}

export const quanLyDatVeService = new QuanLyDatVeService()