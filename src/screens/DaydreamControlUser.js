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

    // useEffect(()=>{
    //     const { users} = useContext(UsersContext);

    //      console.log(users);
    // })


    return (
        <Container style = {styles.container}>
            <Content>
               <List>
                   <Text>????</Text>
                 {users ?
                 users.map((user) => (
                        <ListItem key={user.id.toString()}>
                            <Text> {user.nombre}</Text> 
                        </ListItem>
                )): null}
               </List>  
                 {/* <Button rounded onPress ={insertUser}>
                </Button> */}
               
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create ({

    container: {
        flex: 1,
        backgroundColor: '#fafafa',
      }

});

export default DaydreamControlUser;