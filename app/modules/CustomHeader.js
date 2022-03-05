import React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../styles/Colors';
import { Badge, withBadge } from 'react-native-elements';
function CustomHeader() {
  const {width} = Dimensions.get('window');
  const height = width * 0.4;
  return (
    <View style={HeaderStyle.headerMain}>
      <Image
        style={HeaderStyle.headerLogo}
        source={require('../assets/images/logo.png')}
      />
      <View  style={HeaderStyle.headerMenus}>
        <MaterialCommunityIcons  style={HeaderStyle.headerMenu} name="magnify" />
        <MaterialCommunityIcons  style={HeaderStyle.headerMenu} name="bell-outline" />
        <MaterialCommunityIcons  style={HeaderStyle.headerMenu} name="heart-outline" />
        <View style={HeaderStyle.headerMenu}>
          <MaterialCommunityIcons style={{ fontSize:25,
     color:Colors.textPrimaryColor}} name="shopping" />
      <Badge style={{position:'absolute',top:2}} value="3" status="success" />

        </View>
        
      </View>
    </View>
  );
}

const HeaderStyle = StyleSheet.create({
  headerMain: {
    backgroundColor: Colors.backgroundSecondaryColor,
    height: 50,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position:"absolute",
    zIndex:9999,
    width:'100%'
  },
  headerLogo: {
    width: 100,
    margin: 5,
    height:'100%', 
  },
  headerMenus:{
    
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    right:10,
    color:Colors.textPrimaryColor
    
  },
  headerMenu:{
     fontSize:25,
     margin:10,
     color:Colors.textPrimaryColor
  }
});
export default CustomHeader;
