import React from "react";
import * as SQLite from "expo-sqlite";

// Crea y abre la base de datos 
const db = SQLite.openDatabase("daydream.db");

// Funcionalidades de la tabla Usuario de la base de datos

// Obtener los datos del usuario

const getUsers = (setUsersFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from users",
        [], 
        (_, { rows: { _array }}) => { 
        setUsersFunc(_array);
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

// const insertUser = (usuarioNombre,usuarioCorreo,usuarioPeso,usuarioEdad, usuarioaltura, successFunc) =>{
  const insertUser = (usuarioNombre, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into users (nombre) value (?)", [
          usuarioNombre
        ]);
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
        tx.executeSql("drop table users ");
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
          "create table if not exists users (id integer primary key autoincrement, nombre text , correo text, contrasena text , peso integer , edad integer , altura integer)"
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
        tx.executeSql("insert into users (nombre,correo,contrasena, peso, edad, altura) values (?,?,?,?,?,?)",
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
        console.log("Se insertaron Correctamente");
        resolve(success);
      }
    );
  });
};

//-----------------------------------------Tabla de Alimentos--------------------------------------------

const getFoods = (setFoodsFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from food",
        [], 
        (_, { rows: { _array }}) => { 
        setUserFunc(_array);
        },
        (t, error) => {
            console.log("Error al momento de mostrar los datos de la tabla"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log("Datos de aliementos obtenidos Correctamente");
        }
    );
  });
};

// Insertar Usuario

const nombresComidas = [
  "Arroz",
  "Pan",
  "Postres",
  "Verduras",
  "Frutas"

];

const insertFood = (nombresComidas, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into food (nombre) value (?)",[nombresComidas]);
    },
    (t, error) => {
        console.log("Error al insertar los alimentos");
        console.log(error);
    },
    (_t, _success) => { 
        successFunc;
    }
  );
};


// Borrar la base de datos

const dropDatabaseFoodTableAsync = async () => {
  return new Promise ((resolve, reject) =>{
    db.transaction (
      (tx) => {
        tx.executeSql("drop table food");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla Foods");
        reject(error);
      },
      (_t, result) =>{
        console.log("Tabla Eliminada");
        resolve(result);
      }
    );
  });
};

//Creacion de la tabla de Food
const setupDatabaseFoodTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) =>{
        tx.executeSql(
          "create table if not exists food (id integer primary key autoincrement, nombre text not null)"
        );
      },
      (_t, error) => {
        console.log ("Error al momento de crear la table Food");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("tabla food Creada ");
        resolve(success);
      }
    );
  });
};

const setupFoodAsync = async () => {
  return new Promise ((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into food (nombre) values (?)",[comidas]);
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


export const database = {

  // Usuarioss
  getUsers,
  insertUser,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupUserAsync,

  getFoods,
  insertFood,
  dropDatabaseFoodTableAsync,
  setupDatabaseFoodTableAsync,
  setupFoodAsync
};
 

