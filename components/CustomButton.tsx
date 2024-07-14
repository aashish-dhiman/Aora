import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

interface Props {
    title: string;
    handlePress: () => void;
    containerStyles?: string;
    textStyles?: string;
    isLoading?: boolean;
}

const CustomButton = ({
    title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,
}: Props) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] flex-row items-center justify-center ${containerStyles} ${
                isLoading ? "opacity-50" : ""
            }`}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator size="large" color="#fff" />
            ) : (
                <Text
                    className={`text-primary font-psemibold text-lg ${textStyles}`}
                >
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export default CustomButton;
