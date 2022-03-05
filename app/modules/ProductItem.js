import React from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Colors from '../styles/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');
const height = width * 0.5;
const ProductItem = function ({product, nav}) {
  console.log(product);
  return (
    <View style={ProductItemStyle.Base}>
      <TouchableNativeFeedback onPress={ ()=>{  nav.push("ProductDetailedScreen",{product:product})}}>
        <View>
          <View style={ProductItemStyle.ImageContainer}>
            <Image
              style={ProductItemStyle.Image}
              source={{uri: product.imgs[0]}}></Image>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: Colors.textPrimaryColor,
            }}>
            {product.name}
          </Text>
          <Text style={{textAlign: 'center', color: Colors.textSecondaryColor}}>
            <Text
              style={{
                textDecorationStyle: 'solid',
                textDecorationLine: 'line-through',
              }}>
              {' '}
              ₹
              {parseFloat(product.price) *
                (parseFloat(product.discount) / 100) +
                parseFloat(product.price)}
            </Text>{' '}
            <Text>₹{parseFloat(product.price)}</Text> |{' '}
            <Text>{product.discount + '%'} Off</Text>
          </Text>
        </View>
      </TouchableNativeFeedback>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
          // borderStyle:'solid',
          // borderColor:'black',
          // borderWidth:1,
        }}>
        <Button
          title="Add To Cart"
          size={20}
          color={Colors.buttonProductColor}></Button>
        {/* <MaterialCommunityIcons
              name="cards-heart-outline"
              size={35}
              style={{padding:10, marginLeft:10,color:Colors.buttonHeartColor}}
            /> */}
      </View>
    </View>
  );
};
const ProductItemStyle = StyleSheet.create({
  Base: {
    width: '49%',
    borderStyle: 'solid',
    borderColor: Colors.borderColor,
    borderWidth: 1,
    margin: 3,
    padding: 5,
    backgroundColor: Colors.backgroundSecondaryColor,

    elevation: 2,
  },
  ImageContainer: {
    height: height,
    borderRadius: 2,
    margin: 10,
  },
  Image: {
    height: '100%',
    borderRadius: 2,
  },
  CategoryItemStyleText: {
    zIndex: 999,
    position: 'absolute',
    top: 20,
    left: 20,
    color: Colors.fontImageColor,
    fontWeight: 'bold',
    fontSize: 15,
    textShadowColor: Colors.fontImageShadowColor,
    textShadowRadius: 1,
  },
});
export default ProductItem;
