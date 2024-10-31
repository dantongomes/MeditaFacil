import React, { useState } from "react";
import { Image, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Input, Button } from "@rneui/themed";
import { Icon } from "@rneui/base";
import { auth } from "../../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import styles from "./styles"; // Mantenha seu estilo importado aqui

export default function RegistrationScreen({ navigation }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  async function onRegisterPress() {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "Senhas não conferem.");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Sucesso", "Usuário cadastrado com sucesso!");
      // Redirecionar para Login ou Home, se necessário
    } catch (error) {
      Alert.alert("Erro", error.message);
    }

    // Limpar os campos
  
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("../../../assets/icon.png")} />

        <Text style={styles.welcomeText}>Cadastrar</Text>

        <Input
          containerStyle={styles.inputContainer}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          leftIcon={
            <Icon
              name="envelope"
              type="font-awesome"
              size={24}
              color="#381b72"
            />
          }
          inputContainerStyle={{ backgroundColor: "#F0EDFF", borderBottomWidth: 0 }}
        />

        <Input
          containerStyle={styles.inputContainer}
          placeholder="Senha"
          secureTextEntry
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
          inputContainerStyle={{ backgroundColor: "#F0EDFF", borderBottomWidth: 0 }}
        />

        <Input
          containerStyle={styles.inputContainer}
          placeholder="Confirmar Senha"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          autoCapitalize="none"
          leftIcon={
            <Icon
              name="lock"
              type="font-awesome"
              size={24}
              color="#381b72"
            />
          }
          inputContainerStyle={{ backgroundColor: "#F0EDFF", borderBottomWidth: 0 }}
        />

        <Button
          title="Cadastrar"
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
          onPress={onRegisterPress}
        />

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Já tem uma conta?{" "}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Clique aqui
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
