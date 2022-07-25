import { StyleSheet } from "react-native";

export const styles= StyleSheet.create({
    fondo:{
        backgroundColor:"black",
        flex:1
    },
    calculadoraContainer:{
    paddingHorizontal:20,
    flex:1,
    justifyContent:'flex-end'
    },
    resultado:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10
    },
    resultadoPequeno:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'

    },
    fila:{
     flexDirection:"row",
     justifyContent:'center',
     marginBottom:10,
     paddingHorizontal:10
    },

    boton:{
        height:80,
        width:80,
        backgroundColor:"grey",
        borderRadius:100,
        justifyContent:"center",
        marginHorizontal:10

    },
    botonTexto:{
        color:"white",
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    }
})