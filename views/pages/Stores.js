import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Store from '../components/Store';
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableWithoutFeedback,
} from 'react-native';
import {getStores} from '../../api/store';
import {selectList} from '../../app/JantaGarage/storeList/storesList';
import {View} from 'native-base';
import LocationHeader from '../components/LocationHeader'
export default function Stores({navigation, route}) {
  const [stores, setStores] = useState([]);
  const data = useSelector(selectList);
  useEffect(() => {
    setStores(data);
  }, [data]);
  return <MyFlatList stores={stores} navigation={navigation} route={route} />;
}

const MyFlatList = props => {
  let {stores, navigation, route} = props;
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    dispatch(getStores());
    setRefreshing(false);
  };
  return (
    <FlatList
      style={styles.contaier}
      data={stores}
      renderItem={({item}) => (
        <MyStore store={item} route={route} navigation={navigation} />
      )}
      ListHeaderComponent={()=><LocationHeader navigation={navigation} />}
      keyExtractor={(item, index) => item.storeId}
      extraData={stores}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      ItemSeparatorComponent={Separator}
    />
  );
};

const styles = StyleSheet.create({
  contaier: {
    margin: 8,
  },
});

const Separator = ()=>{
  return <View style={{borderBottomWidth:0.2,width:'90%',alignSelf:"center",paddingBottom:8}}>
  </View>
}

const MyStore = props => {
  const {store, navigation} = props;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate('StoreDetail',{store:store});
      }}>
      <View>
        <Store store={store} />
      </View>
    </TouchableWithoutFeedback>
  );
};
