import React from 'react';
import {View, Text, Content, Container, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {selectOrders, cleanOrders} from '../../app/JantaGarage/orders/Orders';
import { selectIsLoggedIn, selectUserId } from '../../app/JantaGarage/user/user';
import firestore from '@react-native-firebase/firestore'

export default function({navigation}) {
  const orders = useSelector(selectOrders);
  const storeId = orders[0].service.storeId;
  let total = 0;
  orders.forEach((order)=>{
      total+=order.service.price * order.count;
  })

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);
  const dispatch  = useDispatch();
  return (
    <Container style={{paddingTop: 16, paddingLeft: 16, borderRadius: 10,paddingRight:16}}>
      <Text style={{fontSize: 32}}>Orders</Text>
      <Content>
        {orders.map((order, i) => (
          <Order key={i} order={order} />
        ))}
        <Text style={{marginRight:16,textAlign:'right',fontSize:24,marginTop:16}}>Total = {total}</Text>
        <Button style={{backgroundColor:'#E0313A',alignItems:"center",alignSelf:'flex-end',marginTop:32}}
        onPress={async ()=>{
            if(!isLoggedIn){
              navigation.navigate('Sign-In')
              return ;
            }
            // alert('can proceed furter');
            try{
              let  order = {
                services:orders,
                storeId:storeId,
                userId:userId,
                placeAt:firestore.FieldValue.serverTimestamp(),
              }
              let orderId = await firestore().collection('orders').add(order);
              console.log(userId);
              await firestore().collection('users').doc(userId).update({
                orders:firestore.FieldValue.arrayUnion({[orderId.id]:true})
              });
              navigation.goBack();
              }catch(err){
              console.log(err);
            }
        }}>
            <Text style={{textAlign:'center'}}>Place Order </Text>
        </Button>
      </Content>
    </Container>
  );
}

const Order = ({order}) => {
  return (
    <View
      style={{
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e1e1e1',
        marginTop: 32,
      }}>
      <Text
        style={{
          paddingTop: 10,
          paddingLeft: 20,
          paddingBottom: 10,
          color: '#555555',
          fontSize: 24,
        }}>
        {order.service.name}
      </Text>
      <View>
        <Text
          style={{
            paddingTop: 10,
            paddingRight: 20,
            paddingBottom: 10,
            color: '#116611',
            fontSize: 24,
          }}>
          {order.count} x {order.service.price}
        </Text>
      </View>
    </View>
  );
};
