import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de la base

export const UsersContext = createContext({});

export const UsersContextProvier = (props) => {

    // Obtener los valores iniciales para el contexto
    // se obtienen desde los props

    const { users: initialUsers, children } = props;

    // Almacenar los valores en el estado

    const [ users, setUsers ] = useState (initialUsers);

    // Cargar u obtener las notas 

    useEffect (() =>{
        refreshUsers();
    }, []);

    const refreshUsers = () => {
        return database.getUsers(setUsers);
    };

    const addNewUser = (nombre, correo, contrasena, edad, peso, altura) => {

        return database.insertUser(nombre,correo,contrasena,edad,peso,altura, refreshUsers);
    };

    const userContext = {
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

