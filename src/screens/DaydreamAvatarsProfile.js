/* Importar los modulos necesarios */
import React,{useContext, useState} from "react";
import {Dimensions, View, ImageBackground, StyleSheet, Image} from "react-native";

// Importar modulos necesarios 
import {
    Button,
    Container,
    Content,
    Text,
    Item
} from "native-base";

const {width, height} = Dimensions.get("window");

//Importar el Contexto usuarios

import { UsersContext} from "../context/UsersContext";

// Asignacion de variables para las imagenes de avatars

const imagenQueso = "../../assets/avatares/queso.png";
const imagenPajarito = "../../assets/avatares/pajarito.png";
const imagenConejito = "../../assets/avatares/conejito.png";
const imagenMariposa = "../../assets/avatares/mariposa.png";
const imagenPinguino = "../../assets/avatares/pinguino.png";
const imagenBicicleta = "../../assets/avatares/bicicleta.png";
const imagenBalon = "../../assets/avatares/balon.png";
const imageOso = "../../assets/avatares/oso.png";
const imageLentes = "../../assets/avatares/lentes.png";
const imageSandwich = "../../assets/avatares/sandwich.png";
const imageGato = "../../assets/avatares/gato.png";
const imageElefante = "../../assets/avatares/elefante.png";

// Funcion Principal de la pantalla


const DaydreamAvatarsProfile = ({ route, navigation}) =>{

    // Variables provenietes del contexto para realizar la insercion en la tabla usuarios

    const {nombre, correo, contrasena,edad, peso, altura} = route.params;

    const usersContext = useContext(UsersContext)

    const { users, addNewUser, refreshUsers } = usersContext;

    // const insertarUsuario = async ( ) =>{

    //     await addNewUser(nombre,correo,contrasena,edad, peso, altura, refreshUsers);
    //     console.log("Se inserto Correctamente");
    // }

    // Funcion para insertar los datos del usuario

    const insertarUsuario = () =>{

        addNewUser(nombre,correo,contrasena,edad, peso, altura, refreshUsers);
        console.log("Se inserto Correctamente");
    }

    // Funcion para navegar en la siguiente pantalla

    const  presionarBoton = () =>{
        insertarUsuario();  
        // navigation.navigate("OptionsHome", {id: users.id});
        navigation.navigate("Users", {id: users.id});
    }

    // Return de la pantalla

    return (
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../assets/Opciones/FondoNubes.jpg")}
                style ={styles.image}>
                    <Text style = {styles.textDatos}>Seleccione un Avatar</Text>
                    <Item style = {styles.item}>
                    <Button transparent  style = {styles.botones}
                    onPress = {presionarBoton}>
                        <Image source = {require (imagenQueso)}/>
                    </Button>
                    <Button transparent  style = {styles.botones}
                    onPress = {presionarBoton}>
                         <Image source = {require (imageSandwich)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                         <Image source = {require (imageElefante)}/>
                    </Button>
                    </Item>
                    <Item style = {styles.item}>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                         <Image source = {require (imageGato)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                         <Image source = {require (imageOso)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                         <Image source = {require (imageLentes)}/>
                    </Button>
                    </Item>
                    <Item style = {styles.item}>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenBalon)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenBicicleta)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenConejito)}/>
                    </Button>
                    </Item>
                    <Item style = {styles.item}>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenMariposa)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenPajarito)}/>
                    </Button>
                    <Button transparent style = {styles.botones}
                     onPress = {presionarBoton}>
                        <Image source = {require (imagenPinguino)}/>
                    </Button>
                    </Item>

            </ImageBackground>
        </View>

    );

}

// Estilos de cada uno de los componetes de la pantalla

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
    ubicacionBotones:{
        flex: 1,
        flexDirection: "row"
    },
    textDatos: {
        fontSize: 30,
        // color: "#4d3978",
        color : "#FFFFFF",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40
    },
    botones:{
        marginLeft : 6,
        marginRight: 6,
        width: width * 0.3,
        height: height * 0.15
    },
    item:{
        marginBottom: 8,
        borderBottomWidth : 0
    }

});

// Importar la funcion de la pantalla

export default DaydreamAvatarsProfile;