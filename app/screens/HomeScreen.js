import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from 'react-native-search-bar';
import CustomHeader from '../modules/CustomHeader';
import ImageSlider from '../modules/ImageSlider';
import AppStyle from '../styles/AppStyle';
import database from '@react-native-firebase/database';

function HomeScreen({navigation}) {
  // database()
  //   .ref('/app')
  //   .once('value')
  //   .then(snapshot => {
  //     console.log('User data: ', snapshot.val());
  //   });
  

  return (
    <View>
      <CustomHeader />
      <View style={AppStyle.baseElement}>
        <ImageSlider />
      </View>
    </View>
  );
}

export default HomeScreen;
