// this is for recent and history
import React from 'react';
import {View, Text} from 'native-base';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
export default function StoreCard() {
 
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={{marginTop: 10, marginLeft: 10, fontWeight: '600'}}>
            Spicy Food Zone (Non Veg )
          </Text>
          <Text
            style={{marginLeft: 10, fontSize: 12, color: 'rgba(0,0,0,0.6)'}}>
            Koni , Bilaspur{' '}
          </Text>
        </View>
        <View style={{flex: 1, marginTop: 10}}>
          <TouchableOpacity>
            <Icons
              name="ios-heart"
              style={{
                alignSelf: 'flex-end',
                marginRight: 16,
                fontSize: 24,
                color: 'rgb(255,50,50)',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.desc}>
        <Label title="ITEMS" desc="5 X Tanduri Roti" />
        <Label title="ORDERED ON" desc="5 X TANDURI ROTI" />
        <Label title="TOTAL AMOUNT" desc="Rs 137.90" />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{color: 'rgba(1,1,1,0.4)', fontSize: 13}}>Serviced</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: 'rgba(1,1,1,0.5)', fontSize: 13}}>Rated</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <Text style={{color: 'rgba(1,1,1,0.4)', fontSize: 13}}>Repeat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Label = ({title, desc}) => {
  return (
    <View style={{marginBottom: 8}}>
      <Text style={{fontSize: 10, color: 'rgba(0,0,0,.5)'}}>{title}</Text>
      <Text style={{fontSize: 12}}>{desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    padding: 12,
    marginTop: 12,
    marginLeft: 10,
    marginRight: 12,
    marginBottom: 10,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,.2)',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: '#0000',
    shadowOffset: {height: 0, width: 1},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 1,
  },
  main: {
    flex: 0,
    flexDirection: 'row',
    height: 60,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#d1d1d1',
    borderRadius: 8,
  },
  desc: {
    marginTop: 8,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  footer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#D3D3D3',
    paddingTop: 5,
    paddingBottom: 10,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
