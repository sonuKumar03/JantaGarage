import {createSlice} from '@reduxjs/toolkit';
const notificationSlice = createSlice({
    name:'notification',
    initialState:[],
    reducers:{
        addNotification:(state,action)=>{
            const notifications = action.payload;
            state = [...state,...notifications];
        }
    }
})
const {actions,reducer} = notificationSlice;
export const selectNotification = state=>state;

export const {addNotification} = actions;
export default reducer;