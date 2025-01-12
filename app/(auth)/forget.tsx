import React, { useState } from 'react';
import { SafeAreaView, 
        StyleSheet, 
        Text, 
        Pressable 
      } from 'react-native';
import { TextInput } from 'react-native-paper';
import Colors from '@/constants/Colors';

export default function Forget() {

  const [email, setEmail] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>
        Mot de passe oublié
      </Text>
      <Text style={styles.subtitle}>
        Indiquez l'adresse mail associée à votre compte
      </Text>

      <TextInput 
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Pressable style={styles.button} onPress={() => console.log('inscrit')}>
        <Text style={styles.buttonText}>
          SUIVANT
        </Text>
      </Pressable>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5
  },
  subtitle: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'condensedBold'
  },
  input: {
    marginTop: 20
  },
  button: {
    padding: 14,
    marginTop: 50,
    backgroundColor: Colors.BLUE,
    borderRadius: 14,
    shadowColor: Colors.DARK_BLUE,
    shadowOpacity: 2,
    elevation: 6,
    shadowRadius: 14
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.WHITE
  },
  cancel: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 20
  },
})