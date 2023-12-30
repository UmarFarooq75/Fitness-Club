import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../Constants/constant";
import { LinearGradient } from "expo-linear-gradient/build/LinearGradient";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";


const BodyPartsCard = ({ item, index }) => {
  const navigation = useNavigation();
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Exercises", { item: item })}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end  mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[20px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.7)"]}
          style={{ width: wp(44), height: hp(15), borderRadius: 20 }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0"
        >
          <Text
            style={{ fontSize: hp(3) }}
            className="text-white font-semibold text-center tracking-wide -bottom-16"
          >
            {item?.name.toUpperCase()}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const BodyParts = () => {
  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => {
          return <BodyPartsCard index={index} item={item} />;
        }}
      />
    </View>
  );
};

export default BodyParts;
