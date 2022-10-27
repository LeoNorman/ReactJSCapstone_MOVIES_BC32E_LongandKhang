import { quanLyRapService } from "../../services/QuanLyRapService";
import { SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "./types/quanLyRapType";


export const layDanhSachHeThongCumRapAcTion = () => {
    return async (dispatch) => {
        try {
            //sử dụng tham số: thamSo
            const result = await quanLyRapService.LayDanhSachHeThongRap()

            //Sau khi lấy dữ liệu từ api => đưa lên redux(reducer)
            console.log('result: ', result.data.content);
            if(result.status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    payload: result.data.content
                })
            }

        } catch (errors) {
            console.log("errors: ", errors);
        }
    }
}
export const layThongTinChiTietPhim = (id) => {

    return async (dispatch) => {
        try {
            const result = await quanLyRapService.LayThongTinLichChieuPhim(id)
            // console.log("result: ", result);
            dispatch({
                type: SET_CHI_TIET_PHIM,
                payload: result.data.content
            })
        }
        catch (errors) {
            console.log("errors: ", errors.reponse?.data);
        }
    }
}