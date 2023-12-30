import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function ExercisesDetails({ route }) {

    const { item } = route.params
    const navigation = useNavigation()
    // console.log(item.instructions)
    return (
        <View className="flex-1 flex">
            <View className="shadow-md bg-neutral-200 rounded-sm">
                <Image contentFit='cover' source={item.gifUrl} style={{ width: wp(100), height: wp(100) }} />
            </View>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="-top-9 mx-1 absolute rounded-full right-0"
                style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}
            >
                <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details of the exercises */}
            <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()}
                    style={{ fontSize: hp(3.5) }}
                    className="font-semibold text-neutral-800 tracking-wide self-center text-center"
                >
                    {item.name.toUpperCase()}
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(100).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className=" text-neutral-700 tracking-wide"
                >
                    Equipment : <Text className="font-bold text-neutral-800">
                        {item?.equipment.toUpperCase()}
                    </Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(200).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className=" text-neutral-700 tracking-wide"
                >
                    Secondary Muscles : <Text className="font-bold text-neutral-800">
                        {item?.secondaryMuscles}
                    </Text>
                </Animated.Text>
                <Animated.Text
                    entering={FadeInDown.delay(300).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className=" text-neutral-700 tracking-wide"
                >
                    Target : <Text className="font-bold text-neutral-800">
                        {item?.target.toUpperCase()}
                    </Text>
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(400).duration(300).springify()}
                    style={{ fontSize: hp(3) }}
                    className="font-semibold text-neutral-800 tracking-wide"
                >
                    Instructions
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(800).duration(300).springify()}
                    style={{ fontSize: hp(2) }}
                    className="text-neutral-800"
                >
                    {item.instructions}
                </Animated.Text>
                <Animated.View entering={FadeInDown.delay(400).springify()}>
                    <TouchableOpacity
                        // onPress={}
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-widest">
                            Time Start
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </ScrollView>
        </View>
    )
}