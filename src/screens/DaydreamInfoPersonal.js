/* Importar los modulos necesarios para la pantalla */

import React, {useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground, Dimensions} from "react-native";

// Importar Componentes de native-base 
import {
    Button,
    Container,
    Icon,
    Input,
    Item,
    Text
} from "native-base";


// Variables declaradas para poder utilizar dimensiones
const {width, height } = Dimensions.get("window");

const DaydreamInfoPersonal = ({ navigation }) =>{

    return (
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../assets/FondoPantallaHome.jpg")}
             style = {styles.image}>
                 <Text style = {styles.textDatos}>Datos Necesarios</Text>
                 <Item style = {styles.itemInput}>
                     <Input placeholder = "Edad"
                        placeholderTextColor ="#FFFFFF"
                        style ={styles.cajaTexto}/>
                 </Item>
                 <Item style = {styles.itemInput}>
                     <Input placeholder = "Peso"
                        placeholderTextColor ="#FFFFFF"
                        style = {styles.cajaTexto}/>
                    <Text style = {styles.cajaTexto}>Kg</Text>
                 </Item>
                 <Item  style = {styles.itemInput}>
                     <Input placeholder = "Altura"
                     placeholderTextColor = "#FFFFFF"
                     style = {styles.cajaTexto}/>
                     <Text style ={styles.cajaTexto}>cm</Text>
                 </Item>
                 <Button rounded style = {styles.boton}
                    onPress = {() => {navigation.navigate ("AvartarsProfile")}}>
                     <Text style = {styles.textBotones}>Siguiente</Text>
                 </Button>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    container : {
        flex:1,
        flexDirection: "column"
    },
    image : {
        flex : 1,
        resizeMode: "cover",
        justifyContent : "center",
    },

    textDatos: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 50
    },
    boton : {
        width: width * 0.7,
        height : height * 0.1,
        backgroundColor: "#4d3978",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 60,
        marginRight: 60,
        borderRadius : 15,
        marginTop: 35
    },

    itemInput: {
        width: width * 0.7,
        height: height * 0.1,
        marginLeft: 60,
        marginRight: 60
    },

    cajaTexto :{
        color :"#FFFFFF"
    },

    textBotones : {
        color: "#FFFFFF",
        fontSize: 15
    },

    icono:{
        color: "#FFFFFF"
    }
});

export default DaydreamInfoPersonal;