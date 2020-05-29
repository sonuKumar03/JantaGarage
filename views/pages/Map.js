import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 23.262200;
const LONGITUDE = 82.560000;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class StaticMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      x:{
          latitude:LATITUDE,
          longitude:LONGITUDE
      },
      mapRegion:null,
      lastLat:null,
      lastLong:null
    };
  }

componentDidMount(){
  
}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={styles.scrollview}
        >
          <MapView
            provider={this.props.provider}
            style={styles.map}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={false}
            rotateEnabled={false}
            initialRegion={this.state.region}
          >
            <Marker draggable
              title="This is a your location"
              description="This is a description"
              coordinate={this.state.x}
              
              onDragEnd={(e)=>this.setState({x:e.nativeEvent.coordinate})}
            />
          </MapView>
        </ScrollView>
      </View>
    );
  }
}

StaticMap.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  scrollview: {
    alignItems: 'center',
  },
  map: {
    width:'100%',
    margin:8,
    height:550
  },
});

export default StaticMap;   `                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           `