/* Importar los modulos necesarios para la pantalla */
import React, {useEffect, useState, useContext} from "react";

// Importar Componentes de native-base 

import { View, StyleSheet, Dimensions, ImageBackground, Image, FlatList} from "react-native";

import {
    Container,
    Item,
    Text,
    Button,
    List,
    ListItem,
    Card,
    CardItem,
    Body,
    Content
} from "native-base";

// Importacion de los contexts existentes para el uso de las opciones de la misma

import { FoodsContext } from "../context/FoodsContext";

import { ExercisesContext } from "../context/ExercisesContext";

import {UsersContext} from "../context/UsersContext";

const {width, height } = Dimensions.get("window");

const DaydreamOptionsHome = ({route, navigation}) =>{

    const {id} = route.params;

    const { foods } = useContext(FoodsContext);

    const { users, refreshUsers } = useContext(UsersContext)

    const { exercises } = useContext(ExercisesContext);


    // console.log(users);

    const {
        ejercicio1, ejercicio2, 
        ejercicio3, ejercicio4,
        ejercicio5, ejercicio6, 
        vaso
     } = route.params;

     const {
        comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida8,
        comida9, comida10, comida11, comida12, comida13, comida14, comida15, comida16,
        comida17, comida18, comida19, comida20
     } = route.params;


     const enviarParametros = () =>{

        navigation.navigate("Profile", {
             id, ejercicio1, ejercicio2, 
             ejercicio3, ejercicio4,
             ejercicio5, ejercicio6, 
             vaso, comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida8,
             comida9, comida10, comida11, comida12, comida13, comida14, comida15, comida16,
             comida17, comida18, comida19, comida20
        });

     }

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require("../../assets/Opciones/FondoNubes.jpg")}
                style = {styles.image}>
                <View  style = {styles.menu}>
                    <Text style ={ styles.textoMenu}>
                        Menu
                    </Text>
                    {/* <Button transparent style = {styles.botonPerfil}
                            onPress = {() => {navigation.navigate ("Profile", {id, comida1})}}>
                                <Image source = {require ("../../assets/Opciones/usuario.png")}
                                style = {styles.usuario}/>
                    </Button> */}

                    <Button transparent style = {styles.botonPerfil}
                            onPress = {enviarParametros}>
                                <Image source = {require ("../../assets/Opciones/usuario.png")}
                                style = {styles.usuario}/>
                    </Button>
                </View>
                <View style = {styles.opciones}>
                    <Item style = {styles.item}>
                    <Button transparent  style = {styles.botones}
                        onPress = {() => {navigation.navigate ("Foods")}}>
                        <Image source = {require ("../../assets/Opciones/comidas.png")}
                        style = {styles.imagenes}
                        />
                    </Button>
                        <Button  transparent style = {styles.botones}
                        onPress = {() => {navigation.navigate ("Exercises")}}>
                        <Image source = {require ("../../assets/Opciones/Ejercicio.png")}
                        style = {styles.imagenes}/>
                         </Button>
                        <Button transparent  style = {styles.botones}
                         onPress = {() => {navigation.navigate ("Hydration")}}>
                        <Image source = {require ("../../assets/Opciones/liquidos.png")}
                        style = {styles.imagenes}/>
                    </Button>
                    </Item>
                    <View>
                </View>
                </View>
                <View>
                    <Image source = {require("../../assets/Opciones/imagenMotivacional.png")} 
                        style = {styles.imagenMotivacional}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: "column"
    },

    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },

    menu:{
        marginTop: 52,
        // backgroundColor: "#624496",
        width : width * 1,
        height: height * 0.1,
        textAlign: "center"
    },

    comidasOpciones:{
        // backgroundColor: "#624496",
        width : width * 1,
        height: height * 0.1,
        textAlign: "center"
    },
    textoMenu: {
       justifyContent: "center",
        fontSize: 30,
        fontWeight: "bold",
        color:"#ffffff",
        marginTop: 20,
        justifyContent: 'center',
        alignItems:"center",
        textAlign: "center",
    },

    opciones: {
        // backgroundColor:"#ffffff",
        width : width * 1,
        height: height * 0.9
    },
    opcionesMenu: {
        // backgroundColor:"#8c8cac",
        width : width * 1,
        height: height * 0.1,
    },
    botones:{
        marginLeft : 4,
        marginRight: 4,
        width: width * 0.31,
        height: height * 0.20,
        marginBottom: 8
    },
    item:{
        marginTop: 15,
        borderBottomWidth : 0
    },

    botonesAlimentos:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.3,
        height: height * 0.15
    },
    itemAlimentos:{
        marginBottom: 8,
        borderBottomWidth : 0
    },
    imagenes: {
        // height: height * 0.11,
        // width: width * 0.2,
        height: height * 0.18,
        width: width * 0.30,
        marginRight: 1,
        marginLeft: 1,
    },
    cardImage:{
        // height: 260, 
        // width:380, 
        height: height * 0.1,
        width: width * 0.1,
        marginLeft: 15, 
        marginRight: 15,
        flexDirection: "row"
        // backgroundColor: "#aac7e2"
    },
    hotelImage:{
        height: height * 0.15,
        width: width * 0.25,
        // marginLeft: 20,
        // marginRight: 35,
        alignItems: "center",
        marginTop: 20,
        // backgroundColor: "#ffffff"
    },
    botonPerfil:{
        marginTop: -45,
        marginLeft : 350,
        marginRight: 4,
        width: width * 0.13,
        height: height * 0.08,
        marginBottom: 8,
        // backgroundColor: "#ffffff"
    },
    usuario: {
        height: height * 0.07,
        width: width * 0.12,
        marginRight: 1,
        marginLeft: 1,
    },
    imagenMotivacional: {
        marginTop: -460,
        height: height * 0.65,
        width: width * 0.99,
        marginLeft: 3,
        marginRight: 3

    },
    cardNombre:{
        backgroundColor: "#ffcde7",
        width: width * 0.8,
        height: height * 0.1,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius : 15,
     },


});

export default DaydreamOptionsHome;

