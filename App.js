import {NavigationContainer} from "@react-navigation/native"
import StackNavigator from "./src/routes/StackNavigator"
// import firebase from '@react-native-firebase/app';





export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  )
}



// const adicionarDados = async () => {
//   try {
//     await database().ref('/usuarios/1').set({
//       nome: 'João',
//       idade: 25,
//     });
//     console.log('Dados adicionados com sucesso!');
//   } catch (error) {
//     console.log('Erro ao adicionar dados:', error);
//   }
// };

// const verificarFirebase = () => {
//   console.log('Firebase está funcionando!');
// };



