import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './views/pages/Home';
import {Provider } from 'react-redux';
import store from './app/store'

const App = ()=>{
  return (
    <Home/>
  )
}

const AppWrapper = ()=>{
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
  <Provider store={store}>
    <App/>
  </Provider>
  )
}

export default AppWrapper;
