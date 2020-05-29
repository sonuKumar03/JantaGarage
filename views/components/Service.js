import {View, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import {useDispatch} from 'react-redux';
import {addOrder, removeOrder} from '../../app/JantaGarage/orders/Orders';
const ServiceItem = props => {
  const {service, _order} = props;
  const dispatch = useDispatch();
  let order = {};
  if (_order.length > 0) order = _order[0];
  return (
    <Grid style={{marginLeft: 16, marginTop: 32, height: 75}}>
      <Row>
        <Col size={2} style={styles.image} />
        <Col size={4} style={{marginLeft: 8}}>
          <Text style={styles.serviceName}>{service.name}</Text>
          <Rating count={3} />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'baseline'}}>
            <FontAwesome name="rupee" />
            <Text>{service.price}</Text>
          </View>
        </Col>
        <Col size={2}>
          <View>
            <View
              style={{
                backgroundColor: '#0474CC',
                flexDirection: 'row',
                marginRight: 24,
                borderRadius: 10,
                paddingLeft: 4,
              }}>
              {((typeof order.count==='undefined')||(order.count===0))? (
                <Text style={{fontSize: 20, marginRight: 16, color: '#ffffff'}}>
                  Add
                </Text>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(removeOrder(service));
                  }}>
                  <Icon
                    name="ios-remove"
                    style={{
                      fontSize: 20,
                      marginRight: 16,
                      color: '#ffffff',
                      paddingLeft: 16,
                    }}
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                onPress={() => {
                  dispatch(addOrder(service));
                }}>
                <Icon
                  style={{fontSize: 24, color: '#ffffff', paddingRight: 8}}
                  name="ios-add"
                />
              </TouchableOpacity>
            </View>
            {order.count > 0 ? (
              <Text style={{textAlign: 'center', paddingRight: 16}}>
                {order.count}
              </Text>
            ) : null}
          </View>
        </Col>
      </Row>
    </Grid>
  );
};
const styles = StyleSheet.create({
  price: {
    color: 'rgb(8,8,8)',
  },
  icon: {
    alignSelf: 'center',
    fontSize: 24,
  },
  ratingIcon: {
    fontSize: 16,
    color: '#FAC205',
  },
  image: {
    backgroundColor: '#e1e1e1',
    borderRadius: 10,
  },
  serviceName: {
    fontSize: 18,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
  },
});

const Rating = props => {
  const {count} = props;
  let rating = [];
  for (let i = 1; i <= count; i++) {
    rating.push(i);
  }
  return (
    <View style={styles.rating}>
      {rating.map((star, i) => (
        <Icon style={styles.ratingIcon} key={i} name="ios-star" />
      ))}
    </View>
  );
};

export default ServiceItem;
