/* Importar los modulos necesarios para la pantalla */

import React, { useEffect, useState } from "react";
import { View, Dimensions, ImageBackground, StyleSheet} from "react-native";

// Importar componentes de native-base
import{
    Container,
    Text,
    Button
} from "native-base";

import { UsersContext } from "../context/UsersContext";

//variable declaradas para poder utilizar dimensiones

// C:\Users\linda\OneDrive\Documentos\III Periodo 2020\Programacion Movil I\III Parcial Proyecto\App Daydream\Daydream

const { width, height } = Dimensions.get("window");

const DaydreamHome = ({ navigation }) =>{
    return(
        <View style ={styles.container}>
            <ImageBackground source ={require ("../../assets/FondoPantallaHome.jpg")}
                    style= {styles.image}>
                <Text style = {styles.textBienvenido}>BIENVENIDO</Text>
                <Button rounded style = {styles.boton}
                    onPress = {() => {navigation.navigate ("Login")}}>
                    <Text style = {styles.textBotones}>Iniciar Sesion</Text>
                </Button>
                <Button rounded style = {styles.boton}
                    onPress = {() => {navigation.navigate ("SignIn")}}>
                    <Text style = {styles.textBotones}>Registrarse</Text>
                </Button>
            </ImageBackground>
    </View>
    );
}

const styles = StyleSheet.create({

    container :{
        flex: 1,
        flexDirection: "column"
    },

    image: {
        flex : 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    textBienvenido :{
        fontSize: 30,
        color:  "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 70
    },

    boton: {
        width:width * 0.7,
        height: height * 0.1,
        backgroundColor: "#4d3978",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 60,
        marginRight: 60,
        marginBottom: 20,
        borderRadius: 15
    },

    textBotones: {
        color :  "#FFFFFF",
        fontSize: 15
    }


});

export default DaydreamHome;






