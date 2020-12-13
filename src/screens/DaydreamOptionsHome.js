import React, {useEffect, useState, useContext} from "react";

import { View, StyleSheet, Dimensions, ImageBackground, Image} from "react-native";

import {
    Container,
    Item,
    Text,
    Button,
    List,
    ListItem
} from "native-base";

import { FoodsContext } from "../context/FoodsContext";

const {width, height } = Dimensions.get("window");

const DaydreamOptionsHome = () =>{

    const { foods } = useContext(FoodsContext);

    console.log(foods);

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require("../../assets/Opciones/FondoNubes.jpg")}
                style = {styles.image}>
                <View  style = {styles.menu}>
                    <Text style ={ styles.textoMenu}>
                        Menu
                    </Text>
                </View>
                <View style = {styles.opciones}>
                    {/* <View style = {styles.opcionesMenu}> */}
                    <Item style = {styles.item}>
                    <Button transparent  style = {styles.botones}>
                        <Image source = {require ("../../assets/Opciones/comidas.png")}
                        style = {styles.imagenes}
                        />
                    </Button>
                        <Button  transparent style = {styles.botones}>
                        <Image source = {require ("../../assets/Opciones/Ejercicio.png")}
                        style = {styles.imagenes}
                        />
                         </Button>
                        <Button transparent  style = {styles.botones}>
                        <Image source = {require ("../../assets/Opciones/liquidos.png")}
                        style = {styles.imagenes}/>
                    </Button>
                    </Item>
                    <View style = {{backgroundColor: "#ffffff"}}>
                        <List>
                        {foods 
                            ? foods.map((food) =>(
                                <ListItem key = {food.id.toString()}>
                                    <Text>{food.nombre}</Text>

                                </ListItem>
                            )): null}
                        </List>
                    </View>
                    </View>
                {/* </View> */}
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

    opciones: {
        // backgroundColor:"#ffffff",
        width : width * 1,
        height: height * 0.9,
    },
    opcionesMenu: {
        // backgroundColor:"#8c8cac",
        width : width * 1,
        height: height * 0.1,
    },
    botones:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.30,
        height: height * 0.17,
        // backgroundColor:"#8c8cac"
    },
    item:{
        marginTop: 15,
        borderBottomWidth : 0
    },
    imagenes: {
        // height: height * 0.11,
        // width: width * 0.2,
        height: height * 0.17,
        width: width * 0.28,
        marginRight: 5,
        marginLeft: 5,
    }

});

export default DaydreamOptionsHome;

