import { View, Text } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-new-snap-carousel'
import { sliderImage } from '../Constants/constant'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const ItemCard = ({ item, index }, parallaxProps) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage source={item}
        resizeMode='cover'
        containerStyle={{ borderRadius: 30, flex: 1 }}
        parllaxFactor={1}
        {...parallaxProps}
      />
    </View>
  )
}

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImage}
      loop={true}
      autoplay={true}
      renderItem={ItemCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}

    />
  )
}

export default ImageSlider