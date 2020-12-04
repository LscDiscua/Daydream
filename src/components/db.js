import React from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos 
const db = SQLite.openDatabase("daydream.db");

// Funcionalidades de la tabla Usuario de la base de datos

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

const insertUser = (nombre,correo,peso,edad, altura, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into user (nombre,correo,contrasena, peso, edad, altura) value (?,?,?,?,?,?)",
        [nombre,correo,contrasena,peso,edad,altura]);
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


// Borrar la base de datos

const dropDatabaseTableAsync = async () => {
  return new Promise ((resolve, reject) =>{
    db.transaction (
      (tx) => {
        tx.executeSql("drop table user");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de usuarios");
        reject(error);
      },
      (_t, result) =>{
        console.log("Tabla Eliminada");
        resolve(result);
      }
    );
  });
};

//Creacion de la tabla de user
const setupDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) =>{
        tx.executeSql(
          "create table if not exists user (id integer primary key autoincrement, nombre text not null, correo text not null, contrasena text not null, peso integer not null, edad integer not null, altura integer not null)"
        );
      },
      (_t, error) => {
        console.log ("Error al momento de crear la table");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("tabla Creada");
        resolve(success);
      }
    );
  });
};


// Agrega un usuario por defecto

const setupUserAsync = async () => {
  return new Promise ((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into user (nombre,correo,contrasena, peso, edad, altura) values (?,?,?,?,?,?)",
        [
          "Kim",
          "kim1995@gmail.com",
          "holis",
          8,
          25,
          178,
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Se insertaron?");
        resolve(success);
      }
    );
  });
};

// Alimentos

// const foodLists = [
//   celereales,
//   frutas,
//   verduras,
//   carnes,
//   carnesRojas
// ];


// const setupFoodsTableAsync = async () =>{

//   return new Promise((resolve, reject) =>{
//     db.transaction((tx) =>{
//       tx.executeSql("insert into food (id, food) values (?, ?)", foodLists)
//     })
//   }) 
// }



export const database = {
  getUser,
  insertUser,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupUserAsync,
};
 

