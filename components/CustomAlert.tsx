// CustomAlert.tsx
import React from "react";
import { Modal, View, Text, TouchableOpacity, Pressable } from "react-native";

interface CustomAlertProps {
    visible: boolean;
    title?: string;
    message?: string;
    onClose: () => void;
}

const CustomAlert: React.FC<CustomAlertProps> = ({
    visible,
    title,
    message,
    onClose,
}) => {
    return (
        <Modal
            transparent={true}
            animationType="fade"
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-center items-center bg-primary/50">
                <View className="w-4/5 p-5 bg-gray-200 rounded-lg items-center justify-center">
                    {title && (
                        <Text className="text-lg font-bold mb-2">{title}</Text>
                    )}
                    {message && (
                        <Text className="mb-4 text-center">{message}</Text>
                    )}
                    <View className="flex-row justify-center w-full">
                        <Pressable
                            className="mx-2 py-2 px-4 bg-secondary rounded-md"
                            onPress={onClose}
                        >
                            <Text className="font-pmedium">Close</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CustomAlert;
