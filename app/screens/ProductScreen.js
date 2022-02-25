import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text, Dimensions,ActivityIndicator} from 'react-native';
import CategoryItem from '../modules/CategoryItem';
import AppStyle from '../styles/AppStyle';
import Colors from '../styles/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchProduct } from '../models/ProductModel';
import ProductItem from '../modules/ProductItem';

const {width} = Dimensions.get('window');
const height = width * 0.4;
function ProductScreen({route, navigation}) {
  
  const {catId, catName,baseCat} = route.params;
  const [CategoryJSON, setCategoryJSON] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    setIndicator(true);
    init();
  }, []);

  async function init() {

    console.log(catId,"catId")
    setIndicator(true);
    const data = await fetchProduct(catId);

    setIndicator(false);
    setCategoryJSON(data);

    console.log(data,"prod data")
  }

  return (
    <View>
      <View style={HeaderStyle.headerMain}>
        <Text style={HeaderStyle.headerText}>{"Products "+catName}</Text>
        <View style={HeaderStyle.headerMenus}>
          <MaterialCommunityIcons
            style={HeaderStyle.headerMenu}
            name="shopping"
          />
        </View>
      </View>
      <View style={AppStyle.baseElement}>
          {indicator == true ? <ActivityIndicator size="large" /> : <></>}
        <FlatList
        numColumns={2}
          data={CategoryJSON}
          renderItem={({item})=><ProductItem product={item} nav={navigation}/> } 
        />
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
    position: 'absolute',
    zIndex: 9999,
    width: '100%',
  },
  headerText: {
    width: 100,
    margin: 5,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    color: Colors.textPrimaryColor,
  },
  headerMenus: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    right: 10,
    color: Colors.textPrimaryColor,
  },
  headerMenu: {
    fontSize: 25,
    margin: 10,
    color: Colors.textPrimaryColor,
  },
});
export default ProductScreen;
