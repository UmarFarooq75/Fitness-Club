import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Animated, { FadeInDown } from 'react-native-reanimated';

const ExerciseCard = ({ item, index }) => {
  const navigation = useNavigation()
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
      <TouchableOpacity onPress={() => navigation.navigate("ExercisesDetails", { item: item })}
        className="flex py-3 space-y-2">
        <View className="bg-white shadow rounded-[25px]">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-[25px]"
          />
        </View>
        <Text style={{ fontSize: hp(2) }} className="text-neutral-700 ml-2 font-semibold tracking-wide">
          {
            item?.name.length > 20 ? item.name.toUpperCase().slice(0, 15) + "..." : item.name.toUpperCase()
          }
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const ExercisesList = ({ data }) => {
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => {
          return <ExerciseCard item={item} index={index} />;
        }}
      />
    </View>
  );
};

export default ExercisesList;
