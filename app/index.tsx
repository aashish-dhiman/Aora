import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Redirect, router } from "expo-router";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from "@/context/GlobalProvider";

export default function index() {
    const { isLoading, isLoggedIn } = useGlobalContext();

    // Redirect to home page if already logged in
    if (!isLoading && isLoggedIn) {
        return <Redirect href="/home" />;
    }
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="w-full h-full justify-center items-center px-4">
                    <Image
                        source={images?.logo}
                        resizeMode="contain"
                        className="w-[130px] h-[84px]"
                    />
                    <Image
                        source={images?.cards}
                        resizeMode="contain"
                        className="max-w-[380px] w-full h-[300px]"
                    />

                    <View className="relative mt-5">
                        <Text className="text-3xl text-white font-bold text-center">
                            Discover Endless Possibilities with{" "}
                            <Text className="text-secondary-200">Aora</Text>
                        </Text>

                        <Image
                            source={images?.path}
                            resizeMode="contain"
                            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                        />
                    </View>
                    <Text className="text-gray-100 font-pregular text-center mt-7 text-sm">
                        Where creativity meets innovation:{"\n"} embark on a
                        journey of limitless exploration with Aora
                    </Text>

                    <CustomButton
                        title="Continue with Email"
                        handlePress={() => router.push("/sign-in")}
                        containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>

            <StatusBar backgroundColor="#161622" style="light" />
        </SafeAreaView>
    );
}
