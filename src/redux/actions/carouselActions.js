import axios from "axios";
import {quanLyPhimService} from "../../services/QuanLyPhimService";
import { DOMAIN, TOKEN } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/carouselType";

export const getCarouselAction=async (dispatch)=>{
  try{
    const result = await quanLyPhimService.layDanhSachBanner();

    dispatch({
      type: SET_CAROUSEL,
      arrImg:result.data.content
    })
  }catch(errors){
    console.log('errors',errors)
  }
}
