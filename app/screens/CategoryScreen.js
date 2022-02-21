import React, {useEffect, useState} from 'react';
import {ScrollView, View,ActivityIndicator} from 'react-native';
import CategoryItem from '../modules/CategoryItem';
import CustomHeader from '../modules/CustomHeader';
import AppStyle from '../styles/AppStyle';
import database from '@react-native-firebase/database';

function CategoryScreen({navigation}) {
  const [CategoryJSON, setCategoryJSON] = useState([]);
  const [indicator, setIndicator] = useState(false);

  useEffect(() => {
    setIndicator(true);
    var categoriesJSON = [];
    var ref = database().ref('/app/categories');
    ref
      .orderByChild('pid')
      .equalTo('0')
      .on('value', function (snapshot) {
        setIndicator(true);
        var res =snapshot.val();

        for (var key in res) {
          if (res.hasOwnProperty(key)) {
            categoriesJSON.push( res[key]);
          }
        }
        categoriesJSON.sort(function(a,b){return b[1] - a[1]});
        categoriesJSON.reverse();
      
        setCategoryJSON(categoriesJSON);
        setIndicator(false);
      });
  }, []);

  return (
    <View>
      <CustomHeader />

      <View style={AppStyle.baseElement}>
        {indicator ==true ? <ActivityIndicator size="large"/>:<></>}
     
        <ScrollView>
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
    </View>
  );
}

export default CategoryScreen;
