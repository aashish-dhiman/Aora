import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function index() {
    return (
        <View className="bg-black w-full h-full flex items-center justify-center">
            <StatusBar style="auto" />
            <Text className="text-white">index</Text>
            <Link href="/home" className="text-blue-600">
            Go to Home</Link>
        </View>
    );
}
