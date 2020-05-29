import 'react-native-gesture-handler';
import React, { useState} from 'react';
import {Text, View} from 'native-base';
import { useSelector} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
} from 'react-native';
import Service from '../components/Service';
import {selectOrders} from '../../app/JantaGarage/orders/Orders';

const ServiceList = props => {
    const {services, store} = props;
    const [refreshing, setRefreshing] = useState(false);
    const orders = useSelector(selectOrders);
    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 300);
    };
    
    return (
      <FlatList
        ListHeaderComponent={
          <View>
            <Text style={storeListStyles.header}>{store.name}</Text>
            <View style={storeListStyles.separator} />
            <Text style={storeListStyles.subtitle}>Services</Text>
          </View>
        }
        ListFooterComponent={<View style={{marginTop: 32}} />}
        data={services}
        renderItem={({item}) => (
          <Service
            service={item}
            _order={orders.filter(order => order.service.serviceId.localeCompare(item.serviceId)===0)}
          />
        )}
        keyExtractor={(item, index) => String(index)}
        refreshControl={
          <RefreshControl onRefresh={handleRefresh} refreshing={refreshing} />
        }
      />
    );
  };
  
  const storeListStyles = StyleSheet.create({
    subtitle: {
      fontSize: 24,
      marginLeft: 16,
      marginTop: 32,
      color: '#848585',
    },
    header: {
      fontSize: 30,
      marginLeft: 16,
      marginTop: 16,
    },
    separator: {
      marginLeft: 16,
      marginTop: 16,
      borderBottomColor: '#e1e1e1',
      borderBottomWidth: 1,
    },
  });

export default ServiceList;
