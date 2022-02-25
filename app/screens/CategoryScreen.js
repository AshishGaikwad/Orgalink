import React, {useEffect, useState} from 'react';
import {ScrollView, View, ActivityIndicator,FlatList} from 'react-native';
import CategoryItem from '../modules/CategoryItem';
import CustomHeader from '../modules/CustomHeader';
import AppStyle from '../styles/AppStyle';
import {fetchCategories} from '../models/ProductModel';
import {SafeAreaView} from 'react-native-safe-area-context';

function CategoryScreen({navigation}) {
  const [CategoryJSON, setCategoryJSON] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    setIndicator(true);
    const data = await fetchCategories('0');
    setIndicator(false);
    setCategoryJSON(data);
  }

  return (
    <SafeAreaView>
      <View>
        <CustomHeader />
        <View style={AppStyle.baseElement}>
          {indicator == true ? <ActivityIndicator size="large" /> : <></>}
        <FlatList
          data={CategoryJSON}
          renderItem={({item})=><CategoryItem cat={item} nav={navigation}/> }
        />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CategoryScreen;
