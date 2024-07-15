import { View, Text, FlatList } from "react-native";
import React from "react";

interface Props {
    posts: any[];
}

const Trending = ({ posts }: Props) => {
    return (
        <FlatList
            data={posts}
            horizontal
            keyExtractor={(item) => item.id as unknown as string}
            renderItem={({ item }) => (
                <View className="">
                    <Text className="text-white text-2xl font-psemibold">
                        {item.id}
                    </Text>
                </View>
            )}
        />
    );
};

export default Trending;
