import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function BemVindo({ navigation }) {

    function telaLogin() {
        navigation.navigate("Login");
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../../assets/icon.png")}
                resizeMode="contain"
            />
            <Text style={styles.title}>Boas-Vindas</Text>
            <Text style={styles.description}>
                Meditar é pensar em sua saúde mental. O excesso de informações e demandas que recebemos diariamente sobrecarregam nossa mente.
                {'\n\n'}
                Meditafacil, seu assistente de saúde mental para relaxar e aliviar o estresse com facilidade.
            </Text>
            <TouchableOpacity style={styles.button} onPress={telaLogin}>
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#FFFFFF",
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
    
    },
    description: {
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
        fontSize: 18,

    },
    button: {
        backgroundColor: '#56349B',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 140,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,

    },
});
