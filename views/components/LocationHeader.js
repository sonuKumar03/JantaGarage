import React  from 'react';
import { View ,Text} from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
const Header = ({navigation})=>{
    return (
      <View style={{flex:1,flexDirection:'row',alignItems:'baseline'}}>
      <TouchableOpacity onPress={()=>{ navigation.navigate('Location')}} style={{flexGrow:9}}>
      <View style={{marginLeft:8,marginTop:8,marginBottom:32,flexDirection:'row',alignItems:'center',borderRadius:10,backgroundColor:'#e1e1e1',padding:8}}>
        <Icons name="md-pin" style={{fontSize:24,marginRight:8}}/>
        <Text style={{fontSize:20,paddingLeft:8}}>
          Location Name
        </Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity style={{flexGrow:1}} onPress={()=>{ navigation.toggleDrawer() }}>
        <Icons name="ios-contact" size={28} style={{alignSelf:'flex-end',paddingRight:4}}/>
      </TouchableOpacity>
      </View>
    )
  }

export default Header;