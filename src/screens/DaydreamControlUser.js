 // Componentes necesarios para la pantallas
import React, { useContext, useEffect, useReducer, useState} from "react";
import {StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";

// Componentes importados de native base

import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Card,
    Button,
    Item
} from "native-base";

// Importacion de los contextos de cada de Users y Foods

import { UsersContext} from "../context/UsersContext";

import { FoodsContext } from "../context/FoodsContext";

const {width, height } = Dimensions.get("window");


// Funcion principal de la pantalla

const DaydreamControlUser = ({route, navigation}) => {

    // Variables necesarias para el funcionamiento de la pantalla

    const {id} = route.params;

    const { users, user, getUsuarioById} = useContext(UsersContext);

    const { foods } = useContext(FoodsContext);

    const [theNombreUsuario, setTheNombreUsuario] = useState(false);

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

     // Hook de efecto para obtener el id del usuario

     useEffect(() => {
        const getUsuario = () => {
            getUsuarioById(id);
        };

        getUsuario();

        if(user.length){

            setTheNombreUsuario(user[0].nombre);
        }
    }, [id, user]);


    // Return de la pantalla
   
    return (
        
        <View style= {styles.container}>
            <ImageBackground source = {require("../../assets/fondoCuidad.png")}
                         style = {styles.image}>

                    <Text style = {styles.textoTitulo}>Plan Creado</Text>

                    <Card style = {styles.cardNombre}>
                                    <Text style = {styles.textoNombre}>Usuario: {theNombreUsuario}</Text>
                    </Card>
                    <Content>
                        <View transparent>
                            <Text style = {styles.textoOpciones}>Vasos de Agua</Text>
                                <View style = {{alignItems: "center"}}>
                                    <Image source = {{uri : `${vaso}`}}
                                        style = {styles.hotelImage}/>
                                </View>
                                <Text style = {styles.textoOpciones}>Comidas</Text>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${comida1}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida2}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida3}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida4}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${comida5}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida6}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida7}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida8}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${comida9}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida10}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida11}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida12}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${comida13}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida14}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida15}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida16}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${comida17}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida18}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida19}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${comida20}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Text style = {styles.textoOpciones}>Ejercicios</Text>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${ejercicio1}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${ejercicio2}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${ejercicio3}`}}style = {styles.hotelImage}/>
                                </Item>
                                <Item style = {styles.itemOpciones}>
                                    <Image source = {{uri : `${ejercicio4}`}}style = {styles.hotelImage}/>  
                                    <Image source = {{uri : `${ejercicio5}`}}style = {styles.hotelImage}/>
                                    <Image source = {{uri : `${ejercicio6}`}}style = {styles.hotelImage}/>
                                </Item>
                                </View>
                                <Card>
                                </Card>
                    </Content>
                           
            </ImageBackground>
        </View>
    )
}

// Estilo de los componetes
const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: "center"
    },
    itemOpciones:{
        borderBottomWidth : 0
    },

    textoInicial: {
         textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: "center"
    },
    textoInicial: {
        textAlign: "center"
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textoTitulo: {
        justifyContent: "center",
         fontSize: 40,
         fontWeight: "bold",
         color:"#000000",
         marginTop: 100,
         justifyContent: 'center',
         alignItems:"center",
         textAlign: "center",
        // color:"#efdbe6",
        // justifyContent:"center",
        // textAlign: "center", 
        // // marginTop: - 30,
        // // marginBottom: 30
    },

    textoOpciones: {
        justifyContent: "center",
         fontSize: 40,
         fontWeight: "bold",
        //  color:"#000000",
         justifyContent: 'center',
         alignItems:"center",
         textAlign: "center",
        color:"#000000",
        // justifyContent:"center",
        // textAlign: "center", 
        // // marginTop: - 30,
        // // marginBottom: 30
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
    textoNombre: {
        fontSize: 30,
        fontWeight: "bold"
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

export default DaydreamControlUser;