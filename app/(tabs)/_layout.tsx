import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { House, CircleUserRound, Gamepad, Wallet2, Wallet } from 'lucide-react-native';

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.GRADIENT_START, Colors.GRADIENT_END]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Tabs screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors.SECONDARY,
          tabBarInactiveTintColor: Colors.TEXT,
          tabBarStyle: {
            backgroundColor: Colors.BACKGROUND,
            borderTopWidth: 0,
            elevation: 5,
            shadowColor: Colors.SHADOW,
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            height: 90,
            paddingTop: 5,
            paddingBottom: 10,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            marginBottom: 8,
          },
        }}>
          <Tabs.Screen name="home"
            options={{
              title: 'Accueil',
              tabBarIcon: ({ color }) => <House size={24} color={color} />
            }}
          />
          <Tabs.Screen name="game"
            options={{
              title: 'Game',
              tabBarIcon: ({ color }) => <Gamepad size={24} color={color} />
            }}
          />
          <Tabs.Screen name="wallet"
            options={{
              title: 'Wallet',
              tabBarIcon: ({ color }) => <Wallet2 size={24} color={color} />
            }}
          />
          <Tabs.Screen name="profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color }) => <CircleUserRound size={24} color={color} />
            }}
          />
        </Tabs>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});