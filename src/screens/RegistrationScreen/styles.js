import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",
    },
    logo: {
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
    },
    
    footerView: {    
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: '#432c70'
    },
    footerLink: {
        color: "#381b72",
        fontWeight: "bold",
        fontSize: 16
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
})
