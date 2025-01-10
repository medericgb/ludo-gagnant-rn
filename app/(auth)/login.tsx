import React, { useState } from "react";
import { View, 
        Text, 
        StatusBar, 
        StyleSheet, 
        SafeAreaView,
        Pressable,
        ScrollView,
        TouchableOpacity
    } from "react-native";
import { TextInput } from "react-native-paper";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";

export default function LoginScreen() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar hidden={true} />

                <View style={styles.header}>
                    <Text>Logo miniature</Text>
                </View>
                
                <View style={styles.connect}>
                    <Text style={styles.title}>
                        Connectez-vous
                    </Text>
                    <TextInput
                        style={styles.input}
                        label="Nom d'utilisateur ou Email"
                        value={username}
                        onChangeText={setUsername}
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        label="Mot de passe"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                        right={<TextInput.Icon icon="eye" />}
                    />

                    <Pressable style={styles.button} onPress={() => console.log('connecté')}>
                        <Text style={styles.buttonText}>
                            SE CONNECTER
                        </Text>
                    </Pressable>

                    <View style={styles.forgot}>
                        <TouchableOpacity onPress={() => console.log('forget')}>
                            <Text style={styles.forgotText}>
                                Mot de passe oublié
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.register}>
                        <Text style={styles.registerText}>
                            Nouveau membre ? 
                            <Link href={"/register"}>
                                <Text style={styles.registerTextOp}>
                                    Créer un compte
                                </Text>
                            </Link>
                        </Text>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: '100%',
        // backgroundColor: Colors.GRAY2,
    },
    header: {
        margin: 20,
        padding: 20,
    },
    title: {
        padding: 5,
        fontSize: 30,
        fontWeight: 'bold',
        // textAlign: 'center',
    },
    connect: {
        // flex: 1,
        justifyContent: "center",
        margin: 20,
        marginTop: 300,
        // backgroundColor: Colors.ORANGE
    },
    input: {
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
    forgot: {
        padding: 10,
        margin: 15,
        marginTop: 10,
        // backgroundColor: Colors.GREEN
    },
    forgotText: {
        textAlign: 'right',
        color: Colors.DARK_BLUE,
        fontSize: 16
    },
    register: {
        padding: 5,
        margin: 10
    },
    registerText: {
        fontSize: 18,
        fontWeight: 'black',
        textAlign: 'center'
    },
    registerTextOp: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});