import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { quanLyPhimReducer } from "./quanLyNguoiDung";


const rootReducer=combineReducers({
  quanLyNguoiDungReducer,
})

export const store=configureStore({
  reducer:rootReducer,
  middlewarre: [thunk],
  devTools: true,
})
