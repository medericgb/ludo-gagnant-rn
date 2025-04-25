import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { router } from "expo-router";
// import { Play_400Regular, useFonts } from '@expo-google-fonts/play';

export default function Index() {
  // const [loaded, error] = useFonts({
  //   Play_400Regular,
  // });

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
        alignItems: "center"
      }}
    >
      {/* <Text style={{ fontSize: 38, color: 'white' }}>Ludo Gagnant</Text> */}
    </View>
  );
}
