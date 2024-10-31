import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importação do useNavigation

export default function Home() {
  const navigation = useNavigation(); // Criação da constante navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como você está se sentindo hoje?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('FelizPage')} // Navegação para a página "FelizPage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/feliz.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Feliz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AnsiosoPage')} // Navegação para "AnsiosoPage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/ansioso.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Ansioso</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('TristePage')} // Navegação para "TristePage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/triste.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Triste</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('RaivaPage')} // Navegação para "RaivaPage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/raiva.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Raiva</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('EstressadoPage')} // Navegação para "EstressadoPage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/estressado.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Estressado</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CalmoPage')} // Navegação para "CalmoPage"
          >
            <Image
              style={{ width: 60, height: 60 }} // Estilo aplicado diretamente
              source={require("../../../assets/calma.png")} // Ajuste o caminho
            />
            <Text style={styles.label}>Calmo</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        style={styles.footerImage}
        source={require("../../../assets/icon.png")} // Ajuste o caminho da imagem conforme necessário
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Ajuste para distribuir melhor o espaço
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginVertical: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center', // Centraliza verticalmente o container de botões
    flex: 1, // Permite que o container ocupe o espaço disponível
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    width: '100%', // Faz com que as filas ocupem toda a largura
  },
  button: {
    backgroundColor: '#56349B',
    borderRadius: 10,
    width: 126,
    height: 111,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  footerImage: {
    width: 100,
    height: 100,
    marginBottom: 20, // Posiciona a imagem mais para baixo
  },
});
