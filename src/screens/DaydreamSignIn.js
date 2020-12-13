/* Importar los modulos necesarios para la pantalla */
import React, {useEffect, useState} from "react";
import {View, StyleSheet, ImageBackground, Dimensions} from "react-native";
//Importar componentes de native-base
import {
    Button, 
    Container,
    Icon,
    Input,
    Item,
    Text
} from "native-base";

//Variable declaradas para poder utilizar dimensiones
const {width, height} = Dimensions.get("window");

const DaydreamSignIn = ({ navigation }) => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [contrasenaConfirmada, setContrasenaConfirmada] = useState("");

    const  comparar = () =>{

        if (contrasena === contrasenaConfirmada){

            navigation.navigate("InfoPersonal", {nombre,correo,contrasena})
            setNombre("");
            setCorreo("");
            setContrasena("");
            setContrasenaConfirmada("");
            console.log("contrasenaConfirmada");
        }
        else {
            setContrasena("");
            setContrasenaConfirmada("");
            console.log ("contrasena incorrecta");
        }

    }

    return(
        <View style = {styles.container}>
            <ImageBackground source = {require ("../../assets/FondoPantallaHome.jpg")}
             style = {styles.image}>
            <Text style = {styles.textRegistrarse}>Registrarse</Text>
                <Item style = {styles.itemInput}>
                 <Input placeholder = "Nombre de usuario"
                    placeholderTextColor= "#FFFFFF"
                    value={nombre} onChangeText={setNombre}
                    style = {styles.cajaTexto} />
                 <Icon name = "people" style = {styles.icono}/>
                </Item>
                <Item style = {styles.itemInput}>
                 <Input placeholder = "Correo Electronico"
                    placeholderTextColor= "#FFFFFF"
                    value={correo} onChangeText={setCorreo}
                    style = {styles.cajaTexto} />
                 <Icon name = "mail" style = {styles.icono}/>
                </Item>
                <Item style = {styles.itemInput}>
                 <Input placeholder = "Contraseña" 
                    placeholderTextColor= "#FFFFFF"
                    value={contrasena} onChangeText={setContrasena}
                    style = {styles.cajaTexto}/> 
                 <Icon name = "lock" style = {styles.icono}/>
                </Item>
                <Item style = {styles.itemInput}>
                 <Input placeholder = "Confirmar contraseña" 
                    placeholderTextColor= "#FFFFFF"
                    value={contrasenaConfirmada} onChangeText={setContrasenaConfirmada}
                    style = {styles.cajaTexto}/> 
                <Icon name = "lock" style = {styles.icono}/>
                </Item>
                <Button rounded style = {styles.boton}
                   onPress = {comparar}>
                     <Text style = {styles.textBotones}>Registrarse</Text>
                </Button>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        flexDirection: "column"
    },

    image: {
        flex : 1,
        resizeMode: "cover",
        justifyContent : "center"
    },

    textRegistrarse : {
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

export default DaydreamSignIn;
