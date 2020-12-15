// Componentes necesarios para la pantallas
import React, {useEffect, useState,useContext} from "react";

import { View, StyleSheet, ImageBackground, Dimensions, Image} from "react-native";

// Componentes importados de native base

import {
    Container,
    Item,
    Button,
    Text,
    Content
  
} from "native-base";

// Importacion de los contextos de cada de Foods

import { FoodsContext } from "../context/FoodsContext";


const {width, height } = Dimensions.get("window");


// Funcion principal de la pantalla

const DaydreamFoods = ({navigation}) => {

    // Variables necesarias para el funcionamiento de la pantalla

    const { foods } = useContext(FoodsContext);

      // Return de la pantalla

    return (

        <View style = {styles.container}>
            <ImageBackground source = {require("../../assets/fondoOpciones.png")}
                style = {styles.image}>
                 <View  style = {styles.menu}>
                    <Text style ={ styles.textoComidas}>
                        Comidas
                    </Text>
                </View>
                     <Content >
                        {/* Esto es lo de elemntos  */}
                        <View  style = {styles.comidasOpciones}>
                            <Text style ={ styles.textoMenu}> Verduras </Text>
                        </View>
                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                                onPress={() => {
                                    navigation.navigate("OptionsHome", {comida1: foods[0].nombre})}}>
                                <Image source = {{uri : `${foods[0].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                                 onPress={() => {
                                    navigation.navigate("OptionsHome", {comida2: foods[1].nombre})}}>
                            <Image source = {{uri : `${foods[1].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida3: foods[2].nombre})}}>
                            <Image source = {{uri : `${foods[2].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>

                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida4: foods[3].nombre})}}>
                                <Image source = {{uri : `${foods[3].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida5: foods[4].nombre})}}>
                            <Image source = {{uri : `${foods[4].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida6: foods[5].nombre})}}>
                            <Image source = {{uri : `${foods[5].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>
                    
                        <View  style = {styles.comidasOpciones}>
                            <Text style ={ styles.textoMenu}> Cereales </Text>
                        </View>
                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida7: foods[6].nombre})}}>
                                <Image source = {{uri : `${foods[6].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida8: foods[7].nombre})}}>
                            <Image source = {{uri : `${foods[7].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida9: foods[8].nombre})}}>
                            <Image source = {{uri : `${foods[8].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>

                        <View  style = {styles.comidasOpciones}>
                            <Text style ={ styles.textoMenu}> Frutas </Text>
                        </View>
                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida10: foods[9].nombre})}}>
                                <Image source = {{uri : `${foods[9].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida11: foods[10].nombre})}}>
                            <Image source = {{uri : `${foods[10].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida12: foods[11].nombre})}}>
                            <Image source = {{uri : `${foods[11].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>

                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida13: foods[12].nombre})}}>
                                <Image source = {{uri : `${foods[12].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida14: foods[13].nombre})}}>
                            <Image source = {{uri : `${foods[13].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida15: foods[14].nombre})}}>
                            <Image source = {{uri : `${foods[14].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>
                        <View  style = {styles.comidasOpciones}>
                            <Text style ={ styles.textoMenu}> Carnes Blancas </Text>
                        </View>
                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida16: foods[15].nombre})}}>
                                <Image source = {{uri : `${foods[15].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida17: foods[16].nombre})}}>
                            <Image source = {{uri : `${foods[16].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida18: foods[17].nombre})}}>
                            <Image source = {{uri : `${foods[17].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>

                        <View  style = {styles.comidasOpciones}>
                            <Text style ={ styles.textoMenu}> Carnes Rojas </Text>
                        </View>
                            <Item style = {styles.itemAlimentos}>
                            <Button transparent  style = {styles.botonesAlimentos}
                             onPress={() => {
                                navigation.navigate("OptionsHome", {comida19: foods[18].nombre})}}>
                                <Image source = {{uri : `${foods[18].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent  style = {styles.botonesAlimentos}
                            onPress={() => {
                                navigation.navigate("OptionsHome", {comida20: foods[19].nombre})}}>
                            <Image source = {{uri : `${foods[19].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            <Button transparent style = {styles.botonesAlimentos}
                            onPress={() => {
                                navigation.navigate("OptionsHome", {comida21: foods[20].nombre})}}>
                            <Image source = {{uri : `${foods[20].nombre}`}}
                                            style = {styles.hotelImage}/>
                            </Button>
                            </Item>
                    </Content>



            </ImageBackground>
        </View>

    );

}

// Estilo de los componentes

const styles = StyleSheet.create ({

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
    textoComidas: {
        justifyContent: "center",
         fontSize: 40,
         fontWeight: "bold",
         color:"#ffffff",
         marginTop: 10,
         justifyContent: 'center',
         alignItems:"center",
         textAlign: "center",
     },
    textoMenu: {
       justifyContent: "center",
        fontSize: 30,
        fontWeight: "bold",
        color:"#ffffff",
        marginTop: 10,
        justifyContent: 'center',
        alignItems:"center",
        textAlign: "center",
    },
    botonesAlimentos:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.3,
        height: height * 0.15
    },
    itemAlimentos:{
        marginBottom: 17,
        borderBottomWidth : 0
    },
    imagenes: {
        // height: height * 0.11,
        // width: width * 0.2,
        height: height * 0.17,
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


});

// Exportacion de la funcion principal

export default DaydreamFoods;