import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/quanLyPhimType";


export const quanLyPhimAction = {
    layDanhSachPhimAction: () => {
        return async (dispatch) => {
            try {
                const result = await quanLyPhimService.layDanhSachPhim()
                dispatch({
                    type: SET_DANH_SACH_PHIM,
                    payload: result.data.content
                })
            } catch (errors) {
                console.log('errors: ', errors);
            }
        }
    },

}