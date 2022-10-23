import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { quanLyNguoiDungService } from '../../services/QuanLyNguoiDung'


const initialState = {
  // movieList: [],
  // movieDetail: undefined,
  // isFetching:false,
  userLogin:[],
  isFetchingDetail:false,
  error:undefined
  
}
export const { reducer: quanLyNguoiDungReducer, actions: quanLyPhimActions } = createSlice({
  name: 'quanLyPhim',
  initialState,
  // xử lý những action đồng bộ =>không sủ dụng  để xử lý các action được tạo từ createAsyncthunk
  reducers: {
    // getMovieList: (state, action) => {
    //     state.movieList = action.payload
    // },
    // getMovieDetail: (state, action) => {
    //     state.movieDetail = action.payload
    // },
},
  // xử lý những action bất đồng bộ(call, API)
  extraReducers: (builder)=>{
    builder
    //userLogin
    .addCase(postLogin.pending,(state,action)=>{
      state.isFetching=true
    })
    .addCase(postLogin.fulfilled,(state,action)=>{
      state.movieList=action.payload
      state.isFetching=false
    })
    .addCase(postLogin.rejected,(state,action)=>{
      state.error=action.payload
      state.isFetching=false
    })
  },
})
export const postLogin = createAsyncThunk(
  'quanLyPhim/postThongTinDangNhap', //action type
  async (data, { dispatch, getState, rejectWithValue }) => {
    //try-catch để bắt lỗi của async await try: thành công catch: thất bại
      try{
        const result = await quanLyNguoiDungService.dangNhap(data)
      return result.data.content
      }catch(error){
        return rejectWithValue(error.response.data)
      }
  }
)

// export const getMovieById=createAsyncThunk('quanLyPhim/getMovieById',
// async(movieId,{dispatch,getState,rejectWithValue})=>{
//         try{
//           const result=await quanLyPhimServices.getMovieById(movieId)
//           return result.data.content
//         }catch(error){
//           return rejectWithValue(error.response.data)
//         }
//     }
// )