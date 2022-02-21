/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {View} from 'react-native'
import SplashScreen from './app/screens/SplashScreen';
import AppStyle from './app/styles/AppStyle';
import Constants from './app/util/constants';
import MainScreen from './app/screens/MainScreen';


const App =  ()  => {
  const [isSplash, setSplash] = useState(true);
  
  setTimeout(function(){  
    setSplash(false);
  }, Constants.SplashScreenTimeout);  

  return (
    <View style={AppStyle.rootElement}>
      {isSplash  === true ? <SplashScreen/>:<MainScreen/> }
    </View>    
  );
};
export default App;
