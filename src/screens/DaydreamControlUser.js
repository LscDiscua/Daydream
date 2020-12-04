import React, { useContext } from "react";
import {StyleSheet, View} from "react-native";

import {
    Button,
    Container,
    Content,
    List,
    ListItem,
    Text
} from "native-base";

import { UsersContext} from "../context/UsersContext";


const DaydreamControlUser = ({route}) => {

    const { nombre, correo, contrasena, edad, peso, altura} = route.params;

    const usersContext = useContext(UsersContext)

    const { users, addNewUser } = usersContext;

    const insertUser = ( ) =>{
        addNewUser(nombre,correo,contrasena,edad, peso, altura)
    }

    // console.log(user);

    return (
        <Container>
            <Content>
                <View styles = { {flex : 1, flexDirecion : "row"}}>
                {users.map((user) =>(
                    <Text key ={user.id}>{user.name}</Text>
                ))}
                </View>
                <Button onPress ={insertUser}>
                </Button>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create ({});


export default DaydreamControlUser;