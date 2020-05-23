import {createSlice} from '@reduxjs/toolkit'
const state =[]
const orderSlice = createSlice({
    name:'Orders',
    initialState:state,
    reducers:{
        addOrders :(state,action)=>{
            state.push(action.payload);
        }
    }
})

export const selectOrders = state=>state;
const {actions,reducer} = orderSlice
export  const {addOrders} = actions
export default reducer;