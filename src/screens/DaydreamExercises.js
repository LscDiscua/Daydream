// Componentes necesarios para la pantallas
import React, {useEffect, useState,useContext} from "react";

// Componentes importados de native base

import { View, StyleSheet, Dimensions, ImageBackground, Image } from "react-native";

import {
    Content,
    Container,
    Text,
    Button,
    Item,
    List,
    ListItem
} from "native-base";

// Importacion de los contextos de cada de Exercises

import { ExercisesContext } from "../context/ExercisesContext";

const { width, height } = Dimensions.get ("window");

// Funcion principal de la pantalla


const DaydreamExercises = ({navigation}) => {

    // Variables necesarias para el funcionamiento de la pantalla

    const { exercises } = useContext(ExercisesContext);

    // Return de la pantalla


    return (
        <View style= {styles.container}>
            <ImageBackground source = {require("../../assets/fondoOpciones.png")}
                        style = {styles.image}>
            <View>
                <Text style ={ styles.textoEjercicios}> Actividad Fisica </Text>
            </View>
            <Content style = {styles.contenedor}>
                <Item style = {styles.itemEjercicio}>
                    <Text style ={ styles.textoMenu} >Bailar</Text>
                    <Text style ={ styles.textoMenu}>Caminar</Text>
                    <Text style ={ styles.textoMenu}>Ciclismo</Text>
                </Item>
                <Item style = {styles.itemEjercicio}>
                    <Button transparent  style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {ejercicio1: exercises[1].nombre})}}>
                        <Image source = {{uri : `${exercises[1].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent  style = {styles.botonesEjercicios}
                         onPress={() => {
                            navigation.navigate("OptionsHome", {ejercicio2: exercises[2].nombre})}}>
                    <Image source = {{uri : `${exercises[2].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent style = {styles.botonesEjercicios}
                     onPress={() => {
                        navigation.navigate("OptionsHome", {ejericio3: exercises[3].nombre})}}>
                    <Image source = {{uri : `${exercises[3].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                </Item>
                <Item style = {styles.itemEjercicio}>
                    <Text style ={ styles.textoMenu}>Correr</Text>
                    <Text style ={ styles.textoMenu}>GYM</Text>
                    <Text style ={ styles.textoMenu}>Natación</Text>
                </Item>
                <Item style = {styles.itemEjercicio}>
                    <Button transparent  style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {ejercicio4: exercises[4].nombre})}}>
                        <Image source = {{uri : `${exercises[4].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent  style = {styles.botonesEjercicios}
                    onPress={() => {
                        navigation.navigate("OptionsHome", {ejercicio5: exercises[5].nombre})}}>
                    <Image source = {{uri : `${exercises[5].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {ejercicio6: exercises[9].nombre})}}>
                    <Image source = {{uri : `${exercises[9].nombre}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                </Item>
            </Content>
            </ImageBackground>
        </View>
    )
};

// Estilo de los componetes

const styles = StyleSheet.create({

    image: {
        flex : 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    container:{
        flex:1,
        flexDirection: "column",
        borderBottomWidth : 0
    },
    contenedor: {
        marginTop: 40
    },
    botonesEjercicios:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.3,
        height: height * 0.15
    },
    itemEjercicio:{
        marginBottom: 17,
        borderBottomWidth : 0
    },
    ejercicioImage:{
        height: height * 0.25,
        width: width * 0.25,
        // marginLeft: 20,
        // marginRight: 35,
        alignItems: "center",
        marginTop: 20,
        // backgroundColor: "#ffffff"
    },
    textoEjercicios: {
        justifyContent: "center",
         fontSize: 40,
         fontWeight: "bold",
         color:"#ffffff",
         marginTop: 100,
         justifyContent: 'center',
         alignItems:"center",
         textAlign: "center",
     },
     textoMenu: {
         marginTop: 10,
        justifyContent: "center",
         fontSize: 28,
         color:"#ffffff",
         fontWeight: "bold",
         justifyContent: 'center',
         alignItems:"center",
         textAlign: "center",
         marginRight: 20,
         marginLeft: 20
     },

});

// Exportacion de la funcion principal

export default DaydreamExercises;