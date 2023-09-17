import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as currentBookReducer} from "../store/slices/currentBookSlice";
import {reducer as bookArrReducer} from "../store/slices/booksArr";

const reducers = combineReducers({
    currentBook: currentBookReducer,
    arrayBooks: bookArrReducer,
})

export const store = configureStore({
    reducer: reducers
})