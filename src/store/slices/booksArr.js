import { createSlice } from "@reduxjs/toolkit";


const initialState = []

export const addArrayBooks = createSlice({
    name: 'arrayBooks',
    initialState,
    reducers: {
        addToArrBooks: (state, {payload: books})=>{
        
         state.push(books)
            
        },

        // removeBooks: (state,{payload: books})=>{
        //     state.length = 0;
        //     state.push(books)
        // }
        removeBooks: (state)=>{
            state.length = 0
            
        }
    }
})

export const {actions, reducer} = addArrayBooks