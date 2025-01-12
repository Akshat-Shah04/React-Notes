import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read data
export const showuser = createAsyncThunk(
    "showuser",async(argu,{rejectWithValue})=>{
        const res = await axios.get("http://localhost:3000/users")
        try {
            const resp = res.data
            // console.log(resp.data)
            return resp

        } catch (error) {
            return rejectWithValue(error)
            console.log(error)
        }
    }
)


export const userDetails = createSlice({
    name:"userDetail",
    initialState:{
        user : [],
        loading:false,
        error : null
    },
    reducers:{
        userpending : (state,action)=>{
            state.loading = true
        },
        userfullfiled : (state,action)=>{
            state.loading = false,
            state.user.push(action.payload)
        },
        userreject : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    },
    extraReducers:(bulider)=>{
        bulider
        // get data
        .addCase(showuser.pending , (state)=>{
            state.loading = true
        })
        .addCase(showuser.fulfilled , (state,action)=>{
            state.loading = false,
            state.user = action.payload
        })
        .addCase(showuser.rejected , (state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})

export const {userpending,userfullfiled,userreject} = userDetails.actions

export default userDetails.reducer

