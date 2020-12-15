// Componentes necesarios para la pantallas
import React, {useEffect, useState,useContext} from "react";

import { View, StyleSheet, ImageBackground, Dimensions, Image} from "react-native";

// Componentes importados de native base

import {
    Container,
    Item,
    Button,
    Text,
    Content,
    List,
    ListItem
  
} from "native-base";

// Importacion de los contextos de cada de Cups

import { CupsContext } from "../context/CupsContext";

const {width, height } = Dimensions.get("window");

// Funcion principal de la pantalla

const DaydreamHydration = ({navigation}) => {

     // Variables necesarias para el funcionamiento de la pantalla

    const { cups } = useContext(CupsContext);
    // console.log (cups);

     // Return de la pantalla

    return(
        <Container style= {styles.container}>
            <ImageBackground source = {require("../../assets/fondoOpciones.png")}
                        style = {styles.image}>
            <View>
                <Text style ={ styles.textoEjercicios}> Hidratación </Text>
            </View>
            <Content style = {styles.contenedor}>
                <Item style = {styles.itemEjercicio}>
                    <Button transparent  style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {vaso: cups[0].cantidad})}}>
                        <Image source = {{uri : `${cups[0].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent  style = {styles.botonesEjercicios}
                    onPress={() => {
                        navigation.navigate("OptionsHome", {vaso: cups[1].cantidad})}}>
                    <Image source = {{uri : `${cups[1].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {vaso: cups[2].cantidad})}}>
                    <Image source = {{uri : `${cups[2].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                </Item>
                <Item style = {styles.itemEjercicio}>
                    <Button transparent  style = {styles.botonesEjercicios}
                     onPress={() => {
                        navigation.navigate("OptionsHome", {vaso: cups[3].cantidad})}}>
                        <Image source = {{uri : `${cups[3].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent  style = {styles.botonesEjercicios}
                     onPress={() => {
                        navigation.navigate("OptionsHome", {vaso: cups[4].cantidad})}}>
                    <Image source = {{uri : `${cups[4].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent style = {styles.botonesEjercicios}
                     onPress={() => {
                        navigation.navigate("OptionsHome", {vaso: cups[5].cantidad})}}>
                    <Image source = {{uri : `${cups[5].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                </Item>
                <Item style = {styles.itemEjercicio}>
                    <Button transparent  style = {styles.botonesEjercicios}
                    onPress={() => {
                        navigation.navigate("OptionsHome", {vaso: cups[6].cantidad})}}>
                        <Image source = {{uri : `${cups[6].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent  style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {vaso: cups[7].cantidad})}}>
                    <Image source = {{uri : `${cups[7].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                    <Button transparent style = {styles.botonesEjercicios}
                        onPress={() => {
                            navigation.navigate("OptionsHome", {vaso: cups[5].cantidad})}}>
                    <Image source = {{uri : `${cups[8].cantidad}`}}
                                style = {styles.ejercicioImage}/>
                    </Button>
                </Item>
            </Content>
        </ImageBackground>
        </Container>
    )
}

// Estilo de los componentes

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: "column",
        borderBottomWidth : 0
    },
    image: {
        flex : 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    contenedor: {
        marginTop: 40
    },
    botonesEjercicios:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.3,
        height: height * 0.16
    },
    itemEjercicio:{
        marginBottom: 17,
        borderBottomWidth : 0
    },
    ejercicioImage:{
        height: height * 0.15,
        width: width * 0.3,
        // marginLeft: 20,
        // marginRight: 35,
        alignItems: "center",
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

export default DaydreamHydration;