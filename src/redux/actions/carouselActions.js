import axios from "axios";
import { quanLyPhimService } from "../../services/quanLyPhimService";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/carouselType";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            //sử dụng tham số: thamSo
            const result = await quanLyPhimService.layDanhSachBanner()

            //thành công thì đưa lên reducer
            // console.log("result: ", result);
            dispatch({
                type: SET_CAROUSEL,
                payload: result.data.content
            })

        } catch (errors) {
            console.log("errors: ", errors);
        }
    }
}