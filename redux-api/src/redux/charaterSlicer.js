import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChatacter = createAsyncThunk(
    'character/fetchChatacter',
    async () => {
      const response = await axios.get('https://www.breakingbadapi.com/api/characters')
      return response.data
    }
  );

export const characterSlice = createSlice({
    name:"chatacter",
    initialState:{
        data:[],
        status:null
    },
    reducers:{

    },
    extraReducers:{
        [fetchChatacter.fulfilled]: (state , action)=>{
            state.data = action.payload,
            state.status= "success"
        },
        [fetchChatacter.pending]:(state)=>{
            state.status= "Loading";
        },
        [fetchChatacter.rejected]:(state)=>{
            state.status= "Failed";
        }
    }
})

export default characterSlice.reducer;