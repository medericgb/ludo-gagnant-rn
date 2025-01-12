import React, { useState } from "react";
import { View, 
        Text, 
        ScrollView, 
        StyleSheet,
        Pressable
      } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "@/constants/Colors";


export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const setToken = useAuthStore((state) => state.setToken);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>
        Inscrivez-vous
      </Text>
      <TextInput
        style={styles.input}
        label="Nom d'utilisateur"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        label="Numéro de téléphone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="number-pad"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        label="Mot de passe"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />
      <TextInput
        style={styles.input}
        label="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        autoCapitalize="none"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
      />

      <Pressable style={styles.button} onPress={() => console.log('inscrit')}>
          <Text style={styles.buttonText}>
              S'INSCRIRE
          </Text>
      </Pressable>

      {/* <Text style={styles.alternative}>
        Ou
      </Text> */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    padding: 5,
    fontSize: 30,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  input:{
    marginTop: 10
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
  alternative: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15
  },
});