import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { fetchExercisesByBodypart } from "../api/exercise";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import ExercisesList from "./components/ExercisesList";
import { ScrollView } from "react-native-virtualized-view";
import { Image } from "expo-image";

const Exercises = ({ navigation, route }) => {
  const { item } = route.params;
  const [exercise, setExercise] = useState([]);
  // console.log(item);
  useEffect(() => {
    if (item) {
      getExercises(item.name);
    }
  }, [item]);

  const getExercises = async (bodypart) => {
    let data = await fetchExercisesByBodypart(bodypart);
    // console.log("got data", data);
    setExercise(data);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      <Image
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
        className="rounded-b-[40px]"
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-rose-500 mx-4 absolute rounded-full flex items-center justify-center pr-1"
        style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/* Exercises Part */}
      <View className="mx-4 space-y-3 mt-4">
        <Text
          style={{ fontSize: hp(3) }}
          className="text-neutral-700 font-semibold"
        >
          {item.name.toUpperCase() + " Exercises".toUpperCase()}
        </Text>
        <View className="mb-10">
          <ExercisesList data={exercise} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercises;
