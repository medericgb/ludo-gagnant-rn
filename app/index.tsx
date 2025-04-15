import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {

  useEffect(() => {
    // simulate a delay to show the splash screen
    const timer = setTimeout(() => {
      router.replace("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Splash screen.</Text>
    </View>
  );
}
