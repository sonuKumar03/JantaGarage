import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {View, Container, Header, Text} from 'native-base';
import {Grid, Col, Row} from 'react-native-easy-grid';
export default function Store(props) {
  const{store} = props;
  const [state, setState] = useState(store);

  return (
    <View style={{padding:8}}>
      <Grid>
        <Row style={{height: 100}}>
          <Col size={2}/>
          <Col size={6} style={{backgroundColor: '#e1e1e1'}}>
            <Row size={2} style={{flex:1,alignItems:'center'}}>
              <Text style={styles.header}>{state.name}</Text>
              <Text style={(state.open)?styles.open:styles.closed}> {state.open ? 'open':'closed'} </Text>
            </Row>
            <Row size={6}>
              <Col>
                <Text>{state.locality}</Text>
                <Text>{state.characteristic.features.map(feature=>feature.name).join(',')}</Text>
                <Text>{state.characteristic.types.map(type=>type.name).join(',')}</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    width:'60%'
  },
  open:{
    color:'#ffffff',
    backgroundColor:'#ee2424'
  },
  closed:{
    color:'#ffffff',
    backgroundColor:'#23ff11'
  }
});
