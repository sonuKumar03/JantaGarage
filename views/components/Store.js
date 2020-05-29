import {StyleSheet} from 'react-native';
import React from 'react';
import {View, Text, Card} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
export default function Store(props) {
  const  {store} = props;
  return (
    <View>
      <Grid>
        <Row>
          <Col size={2} style={{paddingTop:4,paddingLeft:4,paddingRight:8}}>
            <Card>
              <View style={{backgroundColor:"#d1d1f1",width:100,height:100}}>
              </View>
            </Card>
          </Col>
          <Col size={6} style={{backgroundColor: '#f1f1f1',paddingTop:4,paddingLeft:8}}>
            <Row size={2} style={{flex:1,alignItems:'center'}}>
              <Text style={styles.header}>{store.name}</Text>
              <Text style={(store.open)?styles.open:styles.closed}> {store.open ? 'open':'closed'} </Text>
            </Row>
            <Row size={6}>
              <Col>
                <Text style={styles.location}>{store.locality}</Text>
                <Types  types={store.characteristic.types}/>
                <Features features={store.characteristic.features}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </View>
  );
}

const Types =({types})=>{
  return (
    <View style={{flexDirection:'row',alignSelf:"flex-start",paddingLeft:4,borderRadius:5}}>
      { 
      types.map((type,i)=><Text key={i} style={{paddingRight:8,color:"#197278"}}>{type.name}</Text>)
      }
    </View>
  )
}

const Features = ({features})=>{
  return (
    <View style={{flexDirection:'row',alignSelf:'flex-start',borderRadius:5,paddingLeft:4,marginTop:4}}>
      {
        features.map((feature,i)=><Text key={i} style={{paddingRight:8,color:'#c44536'}}>{feature.name}</Text>)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    width:'75%',
    paddingLeft:8,
    paddingTop:8,
  },
  location:{
    paddingLeft:8,
    color:'rgb(100,100,100)',
    fontSize:18
  },
  open:{
    color:"#ffffff",
    backgroundColor:'#AB394C'
  },
  closed:{
    borderRadius:10,
    color:"#ffffff",
    backgroundColor:"#181717",
    paddingLeft:4,
    paddingRight:4,
    paddingBottom:2
  },
  types:{
    paddingLeft:8
  },
  features:{
    paddingLeft:8
  }
});
