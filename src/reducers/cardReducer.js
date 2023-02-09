import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: [
        {
            q:"2+2 equals what?",
            a:"4",
            type:"math"
        },
        {
            q:"Is mayonaise an instrument?",
            a:"No",
            type:"science"
        },
        {
            q:"What year was Fullstack Academy founded?",
            a:"2012",
            type:"history"
        }
    ]
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        add: (state,action)=> {
            state.value.push(action.payload);
        }

    }
})

export const {add} = cardsSlice.actions

export default cardsSlice.reducer