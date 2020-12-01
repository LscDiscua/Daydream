import React from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos 
const db = SQLite.openDatabase("daydream.db");

// Funcionalidades de la base de datos

// Obtener los datos del usuario

const getUser = (setUserFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from user",
        [], 
        (_, { rows: { _array }}) => { 
        setUserFunc(_array);
        },
        (t, error) => {
            console.log("Error al momento de mostrar los datos del usuario"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log(" Datos del usuario obtenido correctamente");
        }
    );
  });
};

// Insertar Usuario

const insertUser = (user, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("Inserte un usuario (note) value (?)",[user]);
    },
    (t, error) => {
        console.log("Error al insertar el usuario");
        console.log(error);
    },
    (_t, _success) => { 
        successFunc;
    }
  );
};

//Borrar la tabla
const
 

