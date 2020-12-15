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

    const [ user, setUser ] = useState ("");


    const [ nombre , setNombre] = useState("");

    const [ correo , setCorreo] = useState("");

    const [ edad , setEdad] = useState("");

    const [ peso , setPeso] = useState("");

    const [ altura , setAltura] = useState("");


    // Cargar u obtener las notas 

    useEffect (() =>{
        refreshUsers();
    }, []);

    const refreshUsers = () => {
        return database.getUsers(setUsers);
    }

    // const addNewUser = (usuarioNombre,usuarioCorreo,usuarioContrasena, usuarioPeso,usuarioEdad, usuarioAltura) => {

    //     return database.insertUser(usuarioNombre,usuarioCorreo, usuarioContrasena, usuarioPeso,usuarioEdad, usuarioAltura, refreshUsers);
    // };

    const addNewUser = async (usuarioNombre,usuarioCorreo,usuarioContrasena, usuarioPeso,usuarioEdad, usuarioAltura) => {

        await database.insertUser(usuarioNombre,usuarioCorreo, usuarioContrasena, usuarioPeso,usuarioEdad, usuarioAltura, refreshUsers);
        return refreshUsers();
    };

    const getUsuarioById = (id) =>{

        return database.getUsuarioById(id,setUser);
    }

    const usersContext = {
        users,
        addNewUser,
        user,
        getUsuarioById,
    };

    // Pasar los valores al proveedor y retonarlo

    return (
        <UsersContext.Provider value = {usersContext}>
            {children}
        </UsersContext.Provider>
    );
};

