import { createSlice } from "@reduxjs/toolkit";
import FakeCover from '../FakeCover.png'


const initialState = []

export const addArrayBooks = createSlice({
    name: 'arrayBooks',
    initialState,
    reducers: {
        addToArrBooks: (state, {payload: books})=>{
            if (books.length > 0) {
            books.forEach(element => {
            const book = {};
            book.nameB = element.volumeInfo.title;
            book.authorB = element.volumeInfo.authors;
            book.coverB = element.volumeInfo.imageLinks&&element.volumeInfo.imageLinks.thumbnail || FakeCover;
            book.catagoryB = element.volumeInfo.categories;
            book.description = element.volumeInfo.description || "описание отсутствует";
            book.id = element.id;
            state.push(book)
        });
    }
        
       },

        
        removeBooks: (state)=>{
            state.length = 0
            
        }
    }
})

export const {actions, reducer} = addArrayBooks