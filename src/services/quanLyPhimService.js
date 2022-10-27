import { GROUPID } from "../util/settings/config";
import { api } from "../constants/api"

export const quanLyPhimService = {
    layDanhSachBanner: () => {
        return api.get(`QuanLyPhim/LayDanhSachBanner`)
    },

    layDanhSachPhim: () => {
        return api.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    },
    
}