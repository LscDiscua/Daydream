/* Importar los modulos necesarios para la pantalla */
import React, {useEffect, useState, useContext} from "react";
import { View, StyleSheet, ImageBackground, Dimensions} from "react-native";

// Importar componentes de native-base
import {
    Button,
    Container,
    Icon,
    Input,
    Item,
    Text
} from "native-base";

import { UsersContext } from "../context/UsersContext";




//variable declaradas para poder utilizar dimensiones
 const { width, height } = Dimensions.get("window");

 const DaydreamLogin = ({ navigation }) =>{

    const [ correElectronico, setCorreoElectronico] = useState("");
    const [ contrasenaUsuario, setContrasenaUsuario] = useState("");


    const {users,usuarioCorreo,usuarioContrasena} = useContext(UsersContext);
    console.log(users);

    // const { users,refreshUsers } = usersContext;

    const comprobarUsuario = ()=>{

        console.log("Holis Si entro!");

        if (correElectronico){

            // console.log("Holis Si entro2!");

            for(let i= 0; i < users.length; i ++ ){

                console.log("Holis Si entro2!");
                if (correElectronico === users[i].correo.toString() && contrasenaUsuario === users[i].contrasena.toString()){
                    navigation.navigate("OptionsHome")
                    console.log("Bienvenido");
                }
                else{
                    setCorreoElectronico("");
                    setContrasenaUsuario("");
                    console.log("No se puede ingresar")
                }
            }

        }
        else {
            console.log("debes ingresar algo");
        }

    }
     return(
         <View style = {styles.container}>
             <ImageBackground source = {require ("../../assets/FondoPantallaHome.jpg")}
                    style = {styles.image}>
                 <Text style = {styles.textInicio}>Iniciar Sesion</Text>
                 <Item style = {styles.itemInput}>
                 <Input placeholder = "Correo Electronico"
                    placeholderTextColor= "#FFFFFF"
                    style = {styles.cajaTexto} 
                    value={correElectronico} onChangeText={setCorreoElectronico}/>
                <Icon name = "mail" style = {styles.icono}/>
                 </Item>
                 <Item style = {styles.itemInput}>
                 <Input placeholder = "Contraseña" 
                    placeholderTextColor= "#FFFFFF"
                    style = {styles.cajaTexto} 
                    value={contrasenaUsuario} onChangeText={setContrasenaUsuario}/> 
                    <Icon name = "lock" style = {styles.icono}/>
                 </Item>
                 {/* <Button rounded style = {styles.boton}
                 onPress = {() => { navigation.navigate("OptionsHome")}}>
                     <Text style = {styles.textBotones}>Iniciar Sesion</Text>
                 </Button> */}
                 <Button rounded style = {styles.boton}
                 onPress = {comprobarUsuario}>
                     <Text style = {styles.textBotones}>Iniciar Sesion</Text>
                 </Button>
             </ImageBackground>
         </View>
     );
 }

 const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column"
    },

    image: {
        flex : 1,
        resizeMode: "cover",
        justifyContent : "center"
    },

    textInicio : {
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

 export default DaydreamLogin;

