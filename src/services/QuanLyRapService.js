import { api } from "../contants/api";
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyRapService extends baseService{
    constructor () {
        super()
    }

    LayDanhSachHeThongRap = () => {
        return api.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`)
    }
}

export const quanLyRapService = new QuanLyRapService()