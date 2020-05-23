import {createSlice} from '@reduxjs/toolkit';

const storeList = createSlice({
    name:'storeList',
    initialState:[],
    reducers:{
        addStores:(state,action)=>{
            state=[...action.payload]
            return state;
        }
    }
})
export const selectList = state=>state.storeList;
const {actions,reducer}  = storeList;
export const {addStores} = actions;
export default  reducer;