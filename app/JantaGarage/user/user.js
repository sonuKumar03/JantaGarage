import {createSlice} from '@reduxjs/toolkit' 
import state from './state'

const UserSlice = createSlice({
    name:'user',
    initialState:state,
    reducers:{
        loginUser:(state,action)=>{
            state.isLoggedIn=true,
            state.userId=action.payload
        },
        logoutUser:(state,action)=>{
            state.isLoggedIn=false,
            state.userId=null
        }
    }
})

export const selectIsLoggedIn = state=>state.user.isLoggedIn
export const selectUserId = state=>state.user.userId

const {actions,reducer} = UserSlice;

export const {loginUser,logoutUser} = actions;

export default reducer;