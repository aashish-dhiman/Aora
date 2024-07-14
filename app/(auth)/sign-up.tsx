import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";
import CustomAlert from "@/components/CustomAlert";

const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const submitForm = async () => {
        if (!form.email || !form.password || !form.username) {
            setAlertMessage("Please fill all details!");
            setAlertVisible(true);
            return;
        }
        if (form.password.length < 8) {
            setAlertMessage("Password must be at least 8 characters long!");
            setAlertVisible(true);
            return;
        }
        setIsSubmitting(true);
        try {
            const result = await createUser(
                form.email,
                form.password,
                form.username
            );

            //update the global store

            router.replace("/home");
        } catch (error) {
            console.log("error: ", error);
            // Check if error is of type Error
            let errorMessage = "Something went wrong!";
            if (error instanceof Error) {
                errorMessage = error.message.split("AppwriteException:")[1];
            }

            // Display the error message in an alert
            setAlertMessage(errorMessage);
            setAlertVisible(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <CustomAlert
                        visible={alertVisible}
                        title="Error"
                        message={alertMessage}
                        onClose={() => setAlertVisible(false)}
                    />
                    <Image
                        source={images?.logo}
                        resizeMode="contain"
                        className="w-[115px] h-[35px] "
                    />
                    <Text className="text-2xl text-white mt-10 font-psemibold">
                        Sign up to Aora
                    </Text>

                    {/* Form fields */}
                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => {
                            setForm({ ...form, username: e });
                        }}
                        otherStyles="mt-7"
                        placeholder="Enter your name"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => {
                            setForm({ ...form, email: e });
                        }}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Enter email address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => {
                            setForm({ ...form, password: e });
                        }}
                        otherStyles="mt-7"
                        placeholder="Enter password"
                    />

                    <CustomButton
                        title="Sign up"
                        containerStyles="mt-10"
                        handlePress={submitForm}
                        isLoading={isSubmitting}
                    />

                    <View>
                        <Text className="text-white text-center mt-10">
                            Already have an account?{" "}
                            <Link
                                href="/sign-in"
                                className="text-secondary font-psemibold"
                            >
                                Sign in
                            </Link>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;
