import {notifications,orders,storeList,user,service} from './JantaGarage'
import {combineReducers,configureStore} from '@reduxjs/toolkit'
const reducer = combineReducers({
    notifications,orders,storeList,user,service
});



const store = configureStore({
    reducer,
});

store.subscribe(()=>{
    console.log(store.getState().user);
})


export default store;