import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    KeyboardTypeOptions,
} from "react-native";
import React from "react";
import { icons } from "@/constants";

interface Props {
    value?: string;
    placeholder?: string;
    handleChangeText?: (e: string) => void;
    otherStyles?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
}

const SearchInput = ({
    value,
    placeholder,
    handleChangeText,
    otherStyles,
}: Props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <View className="bg-black-100 border-2 border-black-200 w-full px-4 py-2 rounded-xl focus:border-secondary items-center flex-row space-x-4">
            <TextInput
                value={value}
                onChangeText={handleChangeText}
                className="text-base mt0.5 text-white flex-1 font-pregular items-center"
                placeholder={placeholder}
                placeholderTextColor="#7b7b8b"
                selectionColor="#FF9C01"
            />

            <TouchableOpacity
                onPress={() => {
                    setShowPassword(!showPassword);
                }}
            >
                <Image
                    source={icons?.search}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        </View>
    );
};

export default SearchInput;
