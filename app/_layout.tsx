import { Slot } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Nunito': require('../assets/fonts/Nunito.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // This will keep the splash screen visible
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require("../assets/images/ludo-gagnant-bg.jpeg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Slot />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
