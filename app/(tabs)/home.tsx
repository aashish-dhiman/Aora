import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import { getAllPosts } from "@/lib/appwrite";
import CustomAlert from "@/components/CustomAlert";
import useAppWrite from "@/lib/useAppWrite";
import VideoCard from "@/components/VideoCard";

const Home = () => {
    const [refreshing, setRefreshing] = useState(false);
    const {
        data: posts,
        refetch,
        isLoading,
        isAlertVisible,
        errorMessage,
        setIsAlertVisible,
    } = useAppWrite(getAllPosts);
    console.log("posts: ", posts);

    const onRefresh = async () => {
        setRefreshing(true);
        //fetch new posts if available
        await refetch();
        setRefreshing(false);
    };

    return (
        <SafeAreaView className="bg-primary w-full h-full">
            <CustomAlert
                visible={isAlertVisible}
                title="Error"
                message={errorMessage}
                onClose={() => setIsAlertVisible(false)}
            />
            <FlatList
                data={posts}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <VideoCard post={item} />}
                ListHeaderComponent={() => (
                    <View className="my-6 px-4 space-y-6">
                        <View className="justify-between items-start flex-row mb-6">
                            <View>
                                <Text className="font-pmedium text-sm text-gray-100">
                                    Welcome Back
                                </Text>
                                <Text className="text-2xl font-psemibold text-white">
                                    Aashish
                                </Text>
                            </View>
                            <View className="mt-1.5">
                                <Image
                                    source={images?.logoSmall}
                                    className="w-9 h-9"
                                    resizeMode="contain"
                                />
                            </View>
                        </View>
                        <SearchInput placeholder="Search for trending topics..." />

                        {/* Trending Videos Section */}
                        <View className="w-full flex-1 pt-5 pb-8">
                            <Text className="text-gray-200 mb-3 font-pregular text-lg">
                                Trending Videos
                            </Text>

                            <Trending
                                posts={
                                    [
                                        { id: 1 },
                                        {
                                            id: 2,
                                        },
                                        { id: 3 },
                                    ] ?? []
                                }
                            />
                        </View>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <EmptyState
                        title="No Videos Found!"
                        subTitle="Be the first one to upload a video"
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor="white"
                    />
                }
            />
        </SafeAreaView>
    );
};

export default Home;
