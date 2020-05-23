import 'react-native-gesture-handler';
import React from 'react';
import {Text, View,  Header} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
const Tab = createBottomTabNavigator();
import Stores from './Stores';

const Fav = ()=>{
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Fav</Text>
    </View>
  )
}

const History = ()=>{
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>History</Text>
    </View>
  )
}

function Home() {
  return (
    <>
    <Header/>
    <NavigationContainer>
    <Tab.Navigator lazy={true}
    tabBarOptions={{
      showLabel:false,
      activeBackgroundColor:'#dedede',
      activeTintColor:'#3700B3'
    }}
    >
      <Tab.Screen name="Home" options={
        {
          tabBarLabel:'Home',
          tabBarIcon:({color,size})=><Material color={color} size={size} name='home'/>
        }
      } component={Stores}/>
      <Tab.Screen name="Fav" component={Fav}
        options={{
          tabBarIcon:({color,size})=><Material color={color} size={size} name="heart"/>
        }}
      />
      <Tab.Screen name="History" component={History} 
      options={{
        tabBarIcon:({color,size})=><Material  color={color} size={size} name="refresh"/>
      }}
      />
    </Tab.Navigator>
    </NavigationContainer>
    </>
  );
}

export default Home;