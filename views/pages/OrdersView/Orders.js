import React, { useEffect, useState } from 'react'
import { View } from 'native-base'
import StoreCard from '../../components/StoreCard'
import { FlatList } from 'react-native'
import functions from '@react-native-firebase/functions'
import { useSelector } from 'react-redux'
import {selectUserId} from '../../../app/JantaGarage/user/user'
export default function Orders() {
    const userId = useSelector(selectUserId);
    const [orders,setOrders] =  useState([]);
    useEffect(()=>{
        const orderFunction = functions().httpsCallable('users_getOrders');
        orderFunction(userId).then((response)=>{
          setOrders(response.data);
        }).catch(err=>{
          console.log(err);
        })
      },[])

    return (
        <FlatList
        renderItem={StoreCard}
        keyExtractor={(item,index)=>index}
        extraData={orders}
        />
    )
}
