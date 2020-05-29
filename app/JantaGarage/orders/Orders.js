import {createSlice} from '@reduxjs/toolkit'
const state =[]
const orderSlice = createSlice({
    name:'orders',
    initialState:state,
    reducers:{
        addOrder :(state,action)=>{
            let service = action.payload;
             let order = state.find((order)=>((order.service.serviceId===service.serviceId)));
            if(typeof  order ==='undefined'){
              order = Object.assign({},order,{
                count:1,
                service
              })
            }
            else{
            order  = Object.assign({},order,{
              count:order.count+1,
            }); 
            }
            let _Orders = state.filter((order)=>order.service.serviceId!==service.serviceId);
            return [
                ..._Orders,order
            ]
        },
        removeOrder:(state,action)=>{
            let service = action.payload;
            let order = state.find((order)=>((order.service.serviceId===service.serviceId)));
            if(typeof order==='undefined'){
              return state;
            }
            if(order.count===1){
              return state.filter((order)=>order.service.serviceId!==service.serviceId);
            }
            if(typeof  order ==='undefined'){
             return state;
            }
            else{
            order  = Object.assign({},order,{
              count:order.count-1,
            }); 
            }
            let _Orders = state.filter((order)=>order.service.serviceId!==service.serviceId);
            return [
                ..._Orders,order
            ]
        },
        cleanOrders:(state,action)=>{
            state=[];
            return state;
        }
    }
})

export const selectOrders = state=>state.orders;

const {actions,reducer} = orderSlice

export const {addOrder,removeOrder,cleanOrders} = actions

export default reducer;