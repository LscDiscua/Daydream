/* Importar los modulos necesarios para la pantalla */

import React, {useContext, useEffect, useReducer, useState} from "react";

//Importar componentes de native-base
import {ImageBackground, StyleSheet, View, Dimensions, Image} from "react-native";

import {
    Button,
    Card,
    Container,
    Content,
    List,
    ListItem,
    Text
} from "native-base";

// Importacion del contexto necesario para la pantalla

import { UsersContext } from "../context/UsersContext";

//Variable declaradas para poder utilizar dimensiones

const {width, height } = Dimensions.get("window");


const DaydreamUserProfile = ({route, navigation}) => {

    // Parametro extraidos de la pantalla Login

    const {correElectronico, id} = route.params;

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

        navigation.navigate("ControlUser", {
             id, ejercicio1, ejercicio2, 
             ejercicio3, ejercicio4,
             ejercicio5, ejercicio6, 
             vaso, comida1, comida2, comida3, comida4, comida5, comida6, comida7, comida8,
             comida9, comida10, comida11, comida12, comida13, comida14, comida15, comida16,
             comida17, comida18, comida19, comida20
        })

     }


    // Variables de Context

    const { users, user, getUsuarioById} = useContext(UsersContext);

    // const { usersContext} = useContext(UsersContext);

    const [theNombre, setTheNombre] = useState(false);

    const [theCorreo, setTheCorreo] = useState(false);

    const [theEdad, setTheEdad] = useState(false);

    const [thePeso, setThePeso] = useState(false);

    const [theAltura, setTheAltura] = useState(false);

    // const {nombre, peso, edad, getUsuarioByCorreo} = usersContext;

    // const {user, getUsuarioById} = usersContext;

    const [ error, setError] = useState(false);

    const [ usuario, setUsuario] = useState(null);

    // console.log(users);

   //Hook de efecto que retorna los datos

    useEffect(() => {
        const getUsuario = () => {
            getUsuarioById(id);
        };

        getUsuario();

        if(user.length){

            setTheNombre(user[0].nombre);
            setTheCorreo(user[0].correo);
            setThePeso(user[0].peso);
            setTheEdad(user[0].edad);
            setTheAltura(user[0].altura);
        }
    }, [id, user]);


    // return de la pantalla 
    return (

        <View style= {styles.container}>
            <ImageBackground source = {require("../../assets/fondoCuidad.png")}
                         style = {styles.image}>
                            <Text style = {styles.textoTitulo}>Perfil Usuario</Text>
                            <View style = {styles.viewUsuario}> 
                            <Button transparent style = {styles.imagen}>
                                    <Image source = {require ("../../assets/Opciones/usuario.png")}
                                        style = {styles.usuario}/>
                            </Button>
                            </View>
                             <Card style = {styles.cardNombre}>
                                 <Text style = {styles.textoNombre}>{theNombre}</Text>
                             </Card>
                             <Card style = {styles.cardInformacion}>
                                <Text style = {styles.textoInformacion}>{theCorreo}</Text>
                             </Card>
                             <Card style = {styles.cardInformacion}>
                             <Text style = {styles.textoInformacion}>Edad: {theEdad} años</Text>
                             <Text style = {styles.textoInformacion}>Peso: {thePeso} kg</Text>
                             <Text style = {styles.textoInformacion}>Altura: {theAltura} cm</Text>
                             </Card>
                             <Button transparent style = {styles.cardNombre}
                                    onPress= {enviarParametros}>
                                    <Text style = {{color: "white"}}style = {styles.textoInformacion}>Mostrar Plan </Text>
                            </Button>
            </ImageBackground>
        </View>
     )
    
}

// Estilos  de los componentes

const styles = StyleSheet.create({

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
        fontSize: 50,
        fontWeight: "bold",
       color:"#efdbe6",
        justifyContent:"center",
        textAlign: "center", 
        marginTop: 20,
        marginBottom: 30
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
    cardInformacion:{
        backgroundColor: "#ffcde7",
        width: width * 0.8,
        height: height * 0.15,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: "center",
        borderRadius : 15,
     },
    textoInformacion: {
        fontSize: 20,
        marginLeft: 10,
        color : "#000000"
    },
    imagen:{

        // backgroundColor: "#ffffff",
        width: width * 0.6,
        height: height * 0.15,
        marginLeft: 40,
        marginRight: 40,
        justifyContent: "center",
        borderRadius : 50,

    },

    usuario: {
        height: height * 0.13,
        width: width * 0.2,
        marginRight: 100,
        marginLeft: 100,
        // backgroundColor: "#ffcde7",
    },

    viewUsuario: {
        justifyContent: "center",
        alignItems: "center",
        width: width * 0.8,
        height: height * 0.15,
        marginLeft: 40,
        marginRight: 40,
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

// exportar variable principal

export default DaydreamUserProfile;