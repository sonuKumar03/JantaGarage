import {createSlice} from '@reduxjs/toolkit'

const serviceSlice  = createSlice({
    name:'services',
    initialState:[],
    reducers:{
        addService:(state,action)=>{
            state.push(action.payload);
            return state;
        },
        setServices:(state,action)=>{
            state = [...action.payload];
        }
    }
});


export const selectServices = state=>state.services;
const {actions,reducer}  = serviceSlice
export const {addService,setServices} = actions
export default reducer;