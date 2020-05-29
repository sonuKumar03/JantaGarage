import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getStores} from '../../api/store';
import StoreStackScreen from './Stacks/StoreStack';
import Fav from './Fav';
import Orders from './OrdersView/Orders';
import {selectIsLoggedIn} from '../../app/JantaGarage/user/user';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(getStores());
  }, []);
  return (
    <>
      <Tab.Navigator
        lazy={true}
        tabBarOptions={{
          showLabel: false,
          activeBackgroundColor: '#dedede',
          activeTintColor: '#cc0000',
        }}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Material color={color} size={size} name="home" />
            ),
          }}
          component={StoreStackScreen}
        />
        <Tab.Screen
          name="History"
          component={Orders}
          options={{
            tabBarIcon: ({color, size}) => (
              <Material color={color} size={size} name="refresh" />
            ),
          }}
        />
        <Tab.Screen
          name="Fav"
          component={Fav}
          options={{
            tabBarIcon: ({color, size}) => (
              <Material color={color} size={size} name="heart" />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
const Main = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{swipeEnabled: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Main;
