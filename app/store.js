import {notifications,orders,storeList,user} from './JantaGarage'
import {combineReducers,configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({
    notifications,orders,storeList,user
});

const store = configureStore({
    reducer
});

store.subscribe(()=>{
    console.log(store.getState())
})


export default store;