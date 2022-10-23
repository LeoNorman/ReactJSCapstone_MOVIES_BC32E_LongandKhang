import { api } from "../contants/api";
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";


export class QuanLyPhimService{
    constructor () {
    }

    layDanhSachBanner = () => {
        return api.get(`api/QuanLyPhim/LayDanhSachBanner`)
    }

    layDanhSachPhim = () => {
        return api.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService()