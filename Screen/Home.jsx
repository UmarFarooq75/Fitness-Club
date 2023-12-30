import { View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import ImageSlider from "./components/ImageSlider";
import BodyParts from "./components/BodyParts";
import Header from "./components/Header";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5 " edges={["top"]}>
      <StatusBar style="dark" />
      <View>
        <Header />
      </View>
      {/* Image Slider */}
      <View>
        <ImageSlider />
      </View>
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
