import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  Button
} from 'react-native';
import Colors from '../styles/Colors';

const {width} = Dimensions.get('window');
const height = width * 0.5;
const ProductItem = function ({product,nav}) {
  console.log(product)
  return (
    <SafeAreaView>
      <View>
      <View style={ProductItemStyle.Base}>
        <View>
          <Image style={ProductItemStyle.Image} source={{uri: product.imgs[0]}}></Image>
          </View>
      </View>
      <Text>{product.name}</Text>
      <Text>{parseFloat(product.price) }</Text>
      <Text>{product.discount+"%"}</Text>
      <Button title='Add to Cart'></Button>
      <Button title='Buy'></Button>
      </View>
    </SafeAreaView>
  );
};

const ProductItemStyle = StyleSheet.create({
  Base: {
    height: height,
    width: width,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 3.5,
    paddingBottom:3.5,
    borderRadius: 2,
  },
  Image: {
    height: '100%',
    width: '50%',
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
export default ProductItem;
