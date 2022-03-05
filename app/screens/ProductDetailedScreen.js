import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Text, Dimensions,ActivityIndicator} from 'react-native';
import CategoryItem from '../modules/CategoryItem';

import Colors from '../styles/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchCategories} from '../models/ProductModel';
import AppStyle from '../styles/AppStyle';

const {width} = Dimensions.get('window');
const height = width * 0.4;
function ProductDetailedScreen({route, navigation}) {
  
  const {catId, catName,hasProduct} = route.params;
  const [CategoryJSON, setCategoryJSON] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    setIndicator(true);
    init();
  }, []);


  async function init() {

    console.log(catId,"catId")
    setIndicator(true);
    const data = await fetchCategories(catId);
    setIndicator(false);
    setCategoryJSON(data);
  }
  return (
    <View>
     
    </View>
  );
}

export default ProductDetailedScreen;
