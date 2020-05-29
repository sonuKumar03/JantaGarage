import firestore from '@react-native-firebase/firestore'
import {addStores} from '../app/JantaGarage/storeList/storesList';

export const getStores = ()=>dispatch=> {
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