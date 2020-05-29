import React, {useEffect, useState} from 'react';
import {Text, View, Container, Footer} from 'native-base';
import  {useSelector, useDispatch} from 'react-redux';
import {
  TouchableOpacity,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {selectOrders, cleanOrders} from '../../app/JantaGarage/orders/Orders';
import Icons from 'react-native-vector-icons/Ionicons';
import ServiceList from './ServiceList';
  const StoreDetail = ({route,navigation}) => {
    const {store} = route.params;
    const {storeId} = store;
    const [services, setServices] = useState([]);
    const orders = useSelector(selectOrders);
    useEffect(() => {
      let cb = firestore()
        .collection(`stores/${storeId}/services`)
        .onSnapshot(
          snaps => {
            const services = snaps.docs.map(service => ({
              storeId:storeId,
              serviceId: service.id,
              ...service.data(),
            }));
            setServices(services);
          },
          err => {
            console.log(err);
          },
        );
      return cb;
    }, [storeId]);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(cleanOrders());
    },[])
    return (
      <Container>
        <ServiceList services={services} store={store} />
        {orders.length > 0 ? (
          <Footer style={{backgroundColor: '#0084DD', height: 50}}>
            <View
              style={{
                flex: 1,
                alignItems: 'baseline',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View style={{flex:1,flexDirection:'row',alignItems:'baseline',paddingLeft:8}}>
                <Text style={{
                      textAlign: 'right',
                      marginRight: 16,
                      marginTop: 16,
                      color: '#ffffff',
                      fontSize:18
                    }}>
                  {orders.length}
                </Text>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 16,
                      marginTop: 8,
                      color: '#ffffff',
                      fontSize:18
                    }}>
                    Items
                  </Text>
                </View>
              <TouchableOpacity onPress={()=>{
                navigation.navigate('Checkout');
              }}>
                <View style={{flex:1,flexDirection:'row',alignItems:"baseline"}}>
                  <Icons name="ios-cart"  style={{fontSize:20,color:'#ffffff',marginRight:8}} />
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 16,
                      marginTop: 8,
                      color: '#ffffff',
                      fontSize:18
                    }}>
                    View Cart
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Footer>
        ) : null}
      </Container>
    );
  };
export default  StoreDetail