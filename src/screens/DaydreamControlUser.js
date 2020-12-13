import React, { useContext, useEffect, useReducer } from "react";
import {StyleSheet, View} from "react-native";

import {
    Container,
    Content,
    List,
    ListItem,
    Text
} from "native-base";

import { UsersContext} from "../context/UsersContext";


const DaydreamControlUser = () => {

    // const { users} = useContext(UsersContext);

    // console.log(users);
    const { users} = useContext(UsersContext);
    console.log(users);

    // useEffect(()=>{
    //     const { users} = useContext(UsersContext);

    //      
    // })


    return (
        <Container style = {styles.container}>
            <Content>
               <List style = {{marginTop: 100}}>
                   <Text style= {styles.textoInicial}>Usuario</Text>
                 {users ?
                 users.map((user) => (
                        <ListItem key={user.id.toString()}>
                            <Text> {user.nombre}</Text> 
                            <Text> {user.correo}</Text> 
                        </ListItem>
                )): null}
               </List>   
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: "center"
      },

      textoInicial: {
         textAlign: "center"
      }

});

export default DaydreamControlUser;