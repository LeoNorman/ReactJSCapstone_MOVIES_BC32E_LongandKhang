import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM } from "./types/quanLyPhimType";


export const layDanhSachPhimAction = () => {

    return async (dispatch) => {
        try {
            //sử dụng tham số: thamSo
            const result = await quanLyPhimService.layDanhSachPhim()

            //Sau khi lấy dữ liệu từ api => đưa lên redux(reducer)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                payload: result.data.content
            })

        } catch (errors) {
            console.log("errors: ", errors);
        }
    }
}