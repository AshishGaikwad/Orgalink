import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import Colors from '../styles/Colors';

const {width} = Dimensions.get('window');
const height = width * 0.5;
const CategoryItem = function ({cat,nav}) {
  return (
    <TouchableNativeFeedback onPress={()=>{  nav.push(cat.hasProduct? 'ProductScreen': "ViewScreen",{catId:cat.id,catName:cat.name,hasProduct:cat.hasProduct})}}>
      <View style={CategoryItemStyle.CategoryItemStyleBase}>
        <Image
          style={CategoryItemStyle.CategoryItemStyleImage}
          source={{ 
            uri: cat.img,
          }}
        />
        <Text style={CategoryItemStyle.CategoryItemStyleText} >{cat.displayName}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const CategoryItemStyle = StyleSheet.create({
  CategoryItemStyleBase: {
    height: height,
    width: width,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3.5,
    paddingBottom:3.5,
    borderRadius: 2,
  },
  CategoryItemStyleImage: {
    height: '100%',
    width: '100%',
    borderRadius: 2,
  },
  CategoryItemStyleText:{
      zIndex:999,
      position:'absolute',
      top:20,
      left:20,
      color:Colors.fontImageColor,
      fontWeight:'bold',
      fontSize:15,
      textShadowColor:Colors.fontImageShadowColor,
      textShadowRadius:1,
  }
});
export default CategoryItem;
