import React, {useEffect} from 'react';
import {View,Text} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import Store from '../components/Store';
import firestore from '@react-native-firebase/firestore';
import {
  selectList,
  addStores,
} from '../../app/JantaGarage/storeList/storesList';
export default function Stores() {
  const stores = useSelector(selectList);
  const dispatch = useDispatch();
  useEffect(() => {
    const getStores = () => {
      firestore()
        .collection('stores')
        .onSnapshot(
          snaps => {
            const stores = snaps.docs.map(snap => snap.data());
            dispatch(addStores(stores));
          },
          err => {
            console.log(err);
          },
        );
    };
    getStores();
  }, []);
  return (
    <View>
      <Store store={stores[0]}/>
    </View>
  );
}
