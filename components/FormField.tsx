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
    title: string;
    value: string;
    placeholder?: string;
    handleChangeText: (e: string) => void;
    otherStyles: string;
    keyboardType?: KeyboardTypeOptions | undefined;
}

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    keyboardType,
}: Props) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className=" text-gray-100 font-pmedium">{title}</Text>

            <View className="bg-black-100 border-2 border-black-200 w-full px-1 rounded-xl focus:border-secondary items-center flex-row">
                <TextInput
                    value={value}
                    onChangeText={handleChangeText}
                    className="px-4 py-2 w-full flex-1 font-pregular text-base text-white"
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    keyboardType={title === "Email" ? keyboardType : "default"}
                    secureTextEntry={title === "Password" && !showPassword}
                    selectionColor="#FF9C01"
                />

                {/* Password eye */}
                {title === "Password" && (
                    <TouchableOpacity
                        onPress={() => {
                            setShowPassword(!showPassword);
                        }}
                    >
                        <Image
                            source={!showPassword ? icons?.eye : icons?.eyeHide}
                            className="w-8 h-8"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
