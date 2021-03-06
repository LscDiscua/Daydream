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

const DaydreamInfoPersonal = ({ route, navigation }) =>{


     // Variables necesarias para el funcionamiento de la pantalla
    const {nombre, correo, contrasena} = route.params;

    const [edad, setEdad ] = useState("");

    const [ peso, setPeso] = useState("");

    const [ altura, setAltura] = useState("");

    // Funcion que verifica la campos vacios
    const  camposVacios = () =>{

        if (!peso){

            setEdad("");
            setPeso("");
            setAltura("");
            // console.log ("contrasena incorrecta");
        }

        else {
            navigation.navigate("AvartarsProfile", {nombre,correo,contrasena, edad,peso,altura})
            setEdad("");
            setPeso("");
            setAltura("");
        }        
    }

// Return de la pantalla

    return (
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../assets/FondoPantallaHome.jpg")}
             style = {styles.image}>
                 <Text style = {styles.textDatos}>Datos Necesarios</Text>
                 <Item style = {styles.itemInput}>
                     <Input placeholder = "Edad"
                        placeholderTextColor ="#FFFFFF"
                        value={edad} onChangeText={setEdad}
                        style ={styles.cajaTexto}/>
                 </Item>
                 <Item style = {styles.itemInput}>
                     <Input placeholder = "Peso"
                        placeholderTextColor ="#FFFFFF"
                        value={peso} onChangeText={setPeso}
                        style = {styles.cajaTexto}/>
                    <Text style = {styles.cajaTexto}>Kg</Text>
                 </Item>
                 <Item  style = {styles.itemInput}>
                     <Input placeholder = "Altura"
                     placeholderTextColor = "#FFFFFF"
                     value={altura} onChangeText={setAltura}
                     style = {styles.cajaTexto}/>
                     <Text style ={styles.cajaTexto}>cm</Text>
                 </Item>
                 <Button rounded style = {styles.boton}
                    // onPress = {() => {navigation.navigate ("AvartarsProfile"), {nombre, correo, contrasena, edad, peso, altura}}}
                    onPress ={camposVacios}>
                     <Text style = {styles.textBotones}>Siguiente</Text>
                 </Button>

            </ImageBackground>
        </View>
    );
}


// Estilo de los componentes

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

// Exportacion de la funcion principal

export default DaydreamInfoPersonal;