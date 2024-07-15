import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface Props {
    title: string;
    subTitle: string;
}

const EmptyState = ({ title, subTitle }: Props) => {
    return (
        <View className="flex-1 items-center justify-start px-4 my-10">
            <Image
                source={images?.empty}
                resizeMode="contain"
                className="w-[280px] h-[220px]"
            />
            <Text className="text-white text-xl font-psemibold text-center">
                {title}
            </Text>
            <Text className="text-gray-100 text-sm font-pmedium mt-2">
                {subTitle}
            </Text>

            <CustomButton
                title="Create Video"
                handlePress={() => router.push("/create")}
                containerStyles=" mt-5 px-4"
                textStyles="text-base"
            />
        </View>
    );
};

export default EmptyState;
