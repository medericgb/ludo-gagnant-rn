import React from 'react';
import { View, 
        Text, 
        StyleSheet,
        SafeAreaView,
        StatusBar,
        Pressable
    } from 'react-native';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar hidden={true} /> */}
      {/* <View style={styles.party}> */}

        <Pressable 
          style={({pressed}) => (pressed ? styles.newButtonPressed : styles.newButton)} 
          onPress={() => router.push("/webview")}>
          <Text style={styles.newText}>
            NOUVELLE PARTIE
          </Text>
        </Pressable>

        <Pressable 
          style={({pressed}) => (pressed ? styles.joinButtonPressed : styles.joinButton)}>
          <Text style={styles.joinText}>
            REJOINDRE PARTIE
          </Text>
        </Pressable>

      {/* </View> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  party: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: 100,
    backgroundColor: Colors.BLUE,
    margin: 10
  },
  newButton: {
    padding: 15,
    backgroundColor: Colors.GOLDEN,
    marginTop: 60,
    margin: 15,
    height: '15%',
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  newButtonPressed: {
    padding: 15,
    backgroundColor: Colors.DARK_GOLDEN,
    marginTop: 60,
    margin: 15,
    height: '15%',
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
  },
  newText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.WHITE
  },
  joinButton: {
    backgroundColor: Colors.GREEN,
    margin: 15,
    height: '15%',
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15
  },
  joinButtonPressed: {
    backgroundColor: Colors.DARK_GREEN,
    margin: 15,
    height: '15%',
    width: '45%',
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15
  },
  joinText: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: Colors.WHITE
  },
});