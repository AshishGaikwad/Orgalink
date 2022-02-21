import React, {useEffect, useState} from 'react';
import {ScrollView, View, StyleSheet, Text, Dimensions,ActivityIndicator} from 'react-native';
import CategoryItem from '../modules/CategoryItem';
import AppStyle from '../styles/AppStyle';
import CategoriesJSON from '../assets/dataset/categories.json';
import Colors from '../styles/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import database from '@react-native-firebase/database';

const {width} = Dimensions.get('window');
const height = width * 0.4;
function ViewScreen({route, navigation}) {
  
  const {catId, catName} = route.params;
  const [CategoryJSON, setCategoryJSON] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    setIndicator(true);
    var categoriesJSON = [];
    var ref = database().ref('/app/categories');
    ref
      .orderByChild('pid')
      .equalTo(catId + '')
      .on('value', function (snapshot) {
        setIndicator(true);
        var res =snapshot.val();
        for (var key in res) {
          if (res.hasOwnProperty(key)) {
            categoriesJSON.push( res[key]);
          }
        }
        categoriesJSON.sort(function(a,b){return a[1] - b[1]});
        categoriesJSON.reverse();
        setCategoryJSON(categoriesJSON);
        setIndicator(false);
      });
  }, []);
  return (
    <View>
      <View style={HeaderStyle.headerMain}>
        <Text style={HeaderStyle.headerText}>{catName}</Text>
        <View style={HeaderStyle.headerMenus}>
          <MaterialCommunityIcons
            style={HeaderStyle.headerMenu}
            name="shopping"
          />
        </View>
      </View>
      <ScrollView style={AppStyle.baseElement}>
      {indicator ==true ? <ActivityIndicator size="large"/>:<></>}
        {CategoryJSON.map((data, i) => {
          return (
            <CategoryItem
              key={i}
              id={data.id}
              name={data.displayName}
              image={data.img}
              nav={navigation}
            />
          );
        })}
      </ScrollView>
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
export default ViewScreen;
