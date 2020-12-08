import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de la base

export const UsersContext = createContext({});

export const UsersContextProvier = (props) => {

    // Obtener los valores iniciales para el contexto
    // se obtienen desde los props

    const { users: initialUsers, children } = props;
    // console.log(users);

    // Almacenar los valores en el estado

    const [ users, setUsers ] = useState (initialUsers);

    // Cargar u obtener las notas 

    useEffect (() =>{
        refreshUsers();
    }, []);

    const refreshUsers = () => {
        // return database.getUsers(setUsers);
        console.log("Aqui estoy");
    }

    //  const addNewUser = (usuarioNombre,usuarioCorreo,usuarioPeso,usuarioEdad, usuarioaltura) => {
    const addNewUser = (usuarioNombre) => {

        return database.insertUser(usuarioNombre, refreshUsers);
    };

    

  
    const usersContext = {
        users,
        addNewUser,
    };

    // Pasar los valores al proveedor y retonarlo

    return (
        <UsersContext.Provider value = {usersContext}>
            {children}
        </UsersContext.Provider>
    );
};

