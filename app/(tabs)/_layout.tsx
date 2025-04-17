import React from "react";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "@/constants/Colors";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown:false,
      tabBarActiveTintColor:Colors.GREEN,
      }}>
      <Tabs.Screen name="home" 
        options={{
          title: 'Accueil',
          tabBarIcon:({color})=><Ionicons name="home" size={30} color={color} />
        }}
      />
      <Tabs.Screen name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon:({color})=><Ionicons name="person" size={30} color={color} />
        }}
      />
    </Tabs>
  )
}
