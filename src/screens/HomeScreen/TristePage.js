import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Video } from "expo-av";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function FelizPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.voltar1}>
        <TouchableOpacity          
          onPress={() => navigation.goBack()}
        ><Ionicons name="arrow-back-circle-sharp" size={50} color="#56349B" />
        </TouchableOpacity>
      </View>

      <View style={styles.textContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/triste.png")}
        />
        <Text style={styles.description}>
        Encontre um lugar tranquilo e feche os olhos. Respire profundamente, 
        sentindo a luz suave e acolhedora de cada inspiração preencher seu coração e mente. 
        Imagine a tristeza como nuvens passageiras no céu, reconhecendo que, embora densas agora, elas vão passar.
        À medida que respira, deixe essa luz dissipar a tensão e trazer paz.
        Lembre-se de que, mesmo nas tempestades, sua essência é calma e clara.
        Quando estiver pronto, abra os olhos e leve consigo essa serenidade interior
        </Text>
      </View>

         <Video
      
        style={styles.video}
        source={require("../../../assets/triste.mp4")} // Vídeo local usando require
        useNativeControls // Exibe os controles nativos de vídeo
        resizeMode="contain" // Ajusta o modo de redimensionamento
        isLooping // Define se o vídeo vai ficar em loop
      />

      <Image
        style={styles.footerImage}
        source={require("../../../assets/icon.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  voltar1:{
    marginBottom:20,
    alignSelf:"flex-start"
  },

  textContainer: {
    backgroundColor: "#56349B",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 2,
    marginTop: -20,
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    color: "#FFFFFF",
    textAlign: "center",
  },
  video: {
    width: "100%", // Ajusta o vídeo para ocupar toda a largura do container
    height: 200,
    backgroundColor: "#000", // Background preto para dar destaque
    marginBottom: 20,
  },
  footerImage: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
  voltar: {
    backgroundColor: "#56349B",
    padding: 5,
    borderRadius: 5,
  },
  voltarText: {
    fontSize: 18,
    color: "#FFFFFF",
  },
});

