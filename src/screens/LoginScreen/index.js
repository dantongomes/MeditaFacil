import React, { useState } from "react";

import {
  Image,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Input, Button } from "@rneui/themed";
import { Icon } from "@rneui/base";
// import firebase from '@react-native-firebase/app';

import { auth, db } from "../../../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { collection, getDoc, doc } from "firebase/firestore";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  async function resetPassword() {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert("Redefinir Senha", "Email enviado para " + email);
    } catch (err) {
      if (err.code === "auth/missing-email") {
        Alert.alert("Erro", "Digite o seu Email");
      }
      console.log(err);
    }
  }

  async function onLoginPress() {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Home");
    
    } catch (err) {
      if (err.code === "auth/invalid-credential") {
        Alert.alert("Erro", "Email ou Senha inválido");
      } else if (err.code === "auth/missing-password") {
        Alert.alert("Erro", "A Senha é obrigatória");
      } else {
        console.log(err);
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require("../../../assets/icon.png")}
        />
        
        <Text style={styles.welcomeText}>Boas Vindas</Text>

        <Input
          containerStyle={styles.inputContainer}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          leftIcon={
            <Icon
              name="user"
              type="font-awesome"
              size={24}
              color="#381b72"
            />
          }
          inputContainerStyle={{ backgroundColor: "#F0EDFF", borderBottomWidth: 0 }} // Fundo claro e sem linha
        />
        <Input
          containerStyle={styles.inputContainer}
          placeholder="Senha"
          secureTextEntry={!passwordVisible}
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
          leftIcon={
            <Icon
              name="lock"
              type="font-awesome"
              size={24}
              color="#381b72"
            />
          }
          inputContainerStyle={{ backgroundColor: "#F0EDFF", borderBottomWidth: 0 }} // Fundo claro e sem linha
        />

        <Button
          title="Entrar"
          buttonStyle={{
            backgroundColor: "#381b72", // Cor do botão
            borderWidth: 2,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={onLoginPress}
        />

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Não tem uma conta?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Clique aqui
            </Text>
          </Text>

          <Text onPress={resetPassword} style={[styles.footerLink, { color: "#381b72" }]}>
            Esqueci a senha
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF", // Fundo geral da página
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    borderRadius: 30,
    overflow: 'hidden', // Para garantir que os campos tenham bordas arredondadas
    marginVertical: 10,
  },
  footerView: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    color: "#432c70", // Cor do texto
  },
  footerLink: {
    color: "#381b72", // Cor do texto do link
    fontWeight: "bold",
  },
});
