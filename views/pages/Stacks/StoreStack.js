import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StoreStack = createStackNavigator();
import Map  from '../Map'
import Login from '../Login'
import SignUp from '../SignUp'
import Cart from '../Cart'
import Stores from '../Stores';
import StoreDetail from '../StoreDetail'

const StoreStackScreen = ({navigation,route}) => {
    if(typeof route.state ==='undefined' || route.state.index===0){
      navigation.setOptions({
        tabBarVisible:true
      })
    }else{
      navigation.setOptions({
        tabBarVisible:false
      })
    }
    return (
      <StoreStack.Navigator>
        <StoreStack.Screen
          name="StoreList"
          component={Stores}
          options={{
            headerShown:false
          }}
        />
        <StoreStack.Screen name="StoreDetail"  component={StoreDetail} />
        <StoreStack.Screen name="Checkout"  component={Cart}/>
        <StoreStack.Screen name="Location"  component={Map}/>
        <StoreStack.Screen name="Sign-In"  component={Login}/>
        <StoreStack.Screen name="Sign-Up"  component={SignUp}/>
      </StoreStack.Navigator>
    );
  };

  export default StoreStackScreen;