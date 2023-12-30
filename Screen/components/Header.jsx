import { View, Text, Image } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View className="flex-row justify-between items-center mx-5">
      <View className="space-y-1">
        <Text
          style={{ fontSize: hp(4.5) }}
          className="font-bold tracking-wider text-neutral-700"
        >
          READY TO
        </Text>
        <Text
          style={{ fontSize: hp(4.5) }}
          className="font-bold tracking-wider text-rose-500"
        >
          WORKOUT
        </Text>
      </View>
      <View className=" flex justify-center items-center space-y-1">
        <Image
          source={require("../../assets/images/avatar.png")}
          className="rounded-full"
          style={{ height: hp(6), width: hp(6) }}
        />
        <View
          style={{ height: hp(5.5), width: hp(5.5) }}
          className="bg-neutral-200 rounded-full flex justify-center items-center border-neutral-300 border-[3px]"
        >
          <Ionicons name="notifications" size={hp(3)} color="gray" />
        </View>
      </View>
    </View>
  );
};

export default Header;
