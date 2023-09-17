import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const addCurrentBook = createSlice({
    name: 'currentBook',
    initialState,
    reducers: {
        addBook: (state, {payload: book})=>{
         if (state.length > 0) {
            state.length = 0;
            state.push(book);
           
         } else {
            state.push(book)
         }
         
        
            
        }
    }
})

export const {actions, reducer} = addCurrentBook