import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getPost =createAsyncThunk(
    'posts/getPost' ,
    async ()=>{
    const api = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response =await api.json();
    
    return response;
})
 

const postSlice  = createSlice({
    name:'posts',
    initialState:{posts:null , status:null},

    extraReducers:{
        [getPost.fulfilled]:(state , action)=>{
            state.status = 'success';
            state.posts = action.payload;

        },
        [getPost.pending]:(state  )=>{
            state.status = 'pending';
            
        },
        [getPost.rejected]:(state )=>{
            state.status = 'rejected';
            
        },
    }
})


export default postSlice.reducer;