/* Importar los modulos necesarios para la pantalla */
import React, { useContext, useEffect, useReducer } from "react";
import {StyleSheet, View} from "react-native";

//Importar componentes de native-base
import {
    Container,
    Content,
    List,
    ListItem,
    Text
} from "native-base";

// Importacion del contexto necesario para la pantalla

import { UsersContext} from "../context/UsersContext";

const DaydreamUsers = ({navigation}) => {

    // Variable provneientes del contexto

    const { users} = useContext(UsersContext);

    return(
        <Container style = {styles.container}>
            <View style = {{marginTop: 70, marginBottom: 4}}><Text style= {styles.textoInicial}>Historial de Usuarios</Text></View>
            <Content>
               <List>
                   {/* <Text style= {styles.textoInicial}>Historial de Usuarios</Text> */}
                 {users ?
                 users.map((user) => (
                        <ListItem key={user.id.toString()}
                        onPress = {() => {
                            navigation.navigate("OptionsHome", {id: user.id})
                        }} style = {styles.itemUsuario}>
                            <Text style = {styles.textUsuario}> {user.correo}</Text> 
                        </ListItem>
                )): null}
               </List>   
            </Content>
        </Container>
    );
}

// Estilos  de los componentes

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: "#453572",
        justifyContent: "center"
    },

    textoInicial: {
         textAlign: "center",
         fontSize: 30,
         fontWeight: "bold",
         color: "#ffffff"
    },

    itemUsuario: {
        borderBottomWidth : 0
    },
    textUsuario: {
        fontSize: 20
    }




});

// exportar variable principal

export default DaydreamUsers;