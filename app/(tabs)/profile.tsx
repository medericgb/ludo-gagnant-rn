import React from 'react';
import { View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  Image
} from 'react-native';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilePage}>

        <View style={styles.imgView}>
          <Image source={require('./../../assets/images/react-logo.png')}
            style={styles.imgProfile}
          />
          <Text style={styles.imgText}>
            John Doe
          </Text>
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.WHITE
  },
  profilePage: {
    marginTop: 20,
    padding: 20
  },
  imgView: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 25
  },
  imgProfile: {
    width: 120,
    height: 120,
  },
  imgText: {
    fontSize: 20,
    marginTop: 6,
    fontWeight: 'bold'
  },
});