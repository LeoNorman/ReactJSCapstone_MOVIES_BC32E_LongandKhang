import { SET_CAROUSEL } from "../actions/types/carouselType"

const stateDefault = {
    arrImg: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
        }
    ]
}

export const carouselReducer = (state = stateDefault, {type, payload}) => {
    switch (type) {
        case SET_CAROUSEL: {
            state.arrImg = payload
            return {...state}
        }

        default: return { ...state }
    }
}