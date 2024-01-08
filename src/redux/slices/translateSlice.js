import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../action/translateActions";


const initialState ={
    isLoading: false,
    isError: false,
    answer: "",
}


const translateSlice = createSlice({
    name:"translate",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
          state.answer = action.payload;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(translateText.pending,  (state)=>{
            state.isLoading= true,
            state.answer=""
        })
        builder.addCase(translateText.rejected, (state)=>{
            state.isLoading=false,
            state.isError=true
        })
        builder.addCase(translateText.fulfilled, (state, action)=>{
            console.log('API Response:', action.payload);
            state.isLoading=false,
            state.isError=false,
            state.answer=action.payload

        })
    }

})
export const { setAnswer } = translateSlice.actions

export default translateSlice.reducer