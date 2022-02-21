import React from 'react';
import {View, Image,Dimensions} from 'react-native';

function ImageSlider() {

    const {width} = Dimensions.get("window");
    const height = width *0.4


  return (
    <View>
      <View>
        <Image
          style={{height: height, width: width,resizeMode:'cover',}}
          source={{
            uri: 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}/>
      </View>
    </View>
  );
}

export default ImageSlider;
