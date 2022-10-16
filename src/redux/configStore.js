import { combineReducers, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { carouselReducer } from "./reducers/carouselReducer"


const rootReducer = combineReducers({
    //state ứng dụng
    carouselReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))