import React from 'react';
import {Text,Image, View} from 'react-native'
import SplashStyle from '../styles/SplashStyle';




const SplashScreen = ()=>{
    return(
        <View >
           <Image style={SplashStyle.SplashScreenImage} source={require('../assets/images/SplashScreen.png')}></Image>
        </View>
    )
       
}

export default SplashScreen;