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


// Buscar Usuario por Correo Electronico

const getUsuarioById = (id,setUserFunc) => {
    db.transaction((tx) => {
      tx.executeSql(
        "select nombre,correo, peso, edad, altura from users where id = ?",
        [id],
        (_, { rows: { _array } }) => {
          setUserFunc(_array);
        },
        (_t, error) => {
          console.log("Error al momento de obtener los datos del usuario");
          console.log(error);
        },
        (_t, _success) => {
          console.log("Usuario Obtenido");
        }
      );
    });
};

// Insertar Usuario

const insertUser = async (usuarioNombre,usuarioCorreo,usuarioContrasena, usuarioPeso,usuarioEdad, usuarioAltura, successFunc) =>{
  // const insertUser = (usuarioNombre, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into users (nombre, correo, contrasena, peso, edad, altura) values (?,?,?,?,?,?)", [
          usuarioNombre,
          usuarioCorreo,
          usuarioContrasena,
          usuarioPeso,
          usuarioEdad,
          usuarioAltura
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
          "Linda",
          "LindaSarahi@gmail.com",
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
        setFoodsFunc(_array);
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

// Insertar Comidas

// const nombresComidas = [
//   "Arroz",
//   "Pan",
//   "Postres",
//   "Verduras",
//   "Frutas"

// ];
const nombresComidas = [

  // Aliementos

    // Verduras
      "https://i.ibb.co/wMbN5Ny/apio.png",
      "https://i.ibb.co/GJ03wgw/berenjena.png",
      "https://i.ibb.co/h1zjRBr/brocoli.png",
      "https://i.ibb.co/1ZRd3D0/calabacin.png",
      "https://i.ibb.co/tp336g9/coles-de-bruselas.png",
      "https://i.ibb.co/PD4BtLx/pepino.png",

    // Cereales

      "https://i.ibb.co/n66qfjj/bol-de-arroz.png",
      "https://i.ibb.co/MPYWFDD/copos-de-avena.png",
      "https://i.ibb.co/mqFSFrr/grano-integral.png",
    
    // Frutas
      "https://i.ibb.co/zbXWshq/fresa.png",
      "https://i.ibb.co/LCqcMLk/kiwi.png",
      "https://i.ibb.co/4mFNVdX/melocoton-1.png",
      "https://i.ibb.co/BrcRJbX/naranja.png",
      "https://i.ibb.co/Tt4CGWt/pina.png",
      "https://i.ibb.co/SQRdcFT/sandia.png",

      // Carnes Blancas 
      "https://i.ibb.co/zRgVB8F/gallina.png",
       "https://i.ibb.co/3Mftt3Q/pavo-1.png",
      "https://i.ibb.co/TbPN6J3/pez.png",

    // Carnes Rojas
    "https://i.ibb.co/1MShdBP/cerdo.png",
    "https://i.ibb.co/qJ2LGs9/cordero.png",
    "https://i.ibb.co/HY8KfWH/vaca.png"
]

const imagenQueso = "../../assets/avatares/queso.png";

// const comidas =() => {
//   nombresComidas.map((value) => {
//     (value);
//   });
// }




const insertFood = (nombresComidas, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into food (nombre) values (?)",[nombresComidas]);
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
        nombresComidas.forEach((comida)=>{
          tx.executeSql("insert into food (nombre) values (?)",[comida]); 
        }) 
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Se insertaron Correctamente las Comidas ");
        resolve(success);
      }
    );
  });
};


//--------------------------Tabla Ejercicio -----------------------

const getExercises = (setExercisesFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from exercise",
        [], 
        (_, { rows: { _array }}) => { 
          setExercisesFunc(_array);
        },
        (t, error) => {
            console.log("Error al momento de mostrar los datos de la tabla Exercises"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log("Datos de Exercises obtenidos Correctamente");
        }
    );
  });
};


const nombreEjericios = [
  
  "https://i.ibb.co/gDY6KwG/actividad-domestica.png",
  "https://i.ibb.co/7GBWd9G/baile.png",
  "https://i.ibb.co/kHLqGwY/caminar.png",
  "https://i.ibb.co/QDMdtk3/ciclismo.png",
  "https://i.ibb.co/Gk43DQF/correr.png",
  "https://i.ibb.co/pPs3B1v/ejercicio.png",
  "https://i.ibb.co/9W1VpY8/ejercicios-en-equipo.png",
  "https://i.ibb.co/H7fhT1Q/ejercicios-individuales.png",
  "https://i.ibb.co/3TTRh6n/mar-abierto.png",
  "https://i.ibb.co/JnJk0T6/natacion.png",
  "https://i.ibb.co/5csgwMZ/naturaleza.png"
  ]



const insertExercise = (nombreEjericios, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into exercise (nombre) values (?)",[nombreEjericios]);
    },
    (t, error) => {
        console.log("Error al insertar los ejercicios");
        console.log(error);
    },
    (_t, _success) => { 
        successFunc;
    }
  );
};


// Borrar la base de datos

const dropDatabaseExerciseTableAsync = async () => {
  return new Promise ((resolve, reject) =>{
    db.transaction (
      (tx) => {
        tx.executeSql("drop table exercise");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla exercise ");
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
const setupDatabaseExerciseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) =>{
        tx.executeSql(
          "create table if not exists exercise  (id integer primary key autoincrement, nombre text not null)"
        );
      },
      (_t, error) => {
        console.log ("Error al momento de crear la table  exercise ");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("tabla exercise Creada ");
        resolve(success);
      }
    );
  });
};

const setupExerciseAsync = async () => {
  return new Promise ((resolve, reject) => {
    db.transaction(
      (tx) => {
        nombreEjericios.forEach((ejercicio)=>{
          tx.executeSql("insert into exercise (nombre) values (?)",[ejercicio]); 
        }) 
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Se insertaron Correctamente los Ejercicios ");
        resolve(success);
      }
    );
  });
};



//--------------------------------Tabla Cup -------------------------

const getCups = (setCupsFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from cup",
        [], 
        (_, { rows: { _array }}) => { 
          setCupsFunc(_array);
        },
        (t, error) => {
            console.log("Error al momento de mostrar los datos de la tabla cup"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log("Datos de cup obtenidos Correctamente");
        }
    );
  });
};


const numeroDeVasos = [
  
  "https://i.ibb.co/RCQfdcN/1-vaso.png",
  "https://i.ibb.co/SBS85X6/2-vaso.png",
  "https://i.ibb.co/XZ9M22Q/3-vaso.png",
  "https://i.ibb.co/pX08trd/4-vaso.png",
  "https://i.ibb.co/mhjYw5f/5-vaso.png",
  "https://i.ibb.co/ygxLZqP/6-vaso.png",
  "https://i.ibb.co/47ts35j/7-vaso.png",
  "https://i.ibb.co/16N8HF4/8-vaso.png",
  "https://i.ibb.co/vVq9dp9/9-vaso.png",
  ]



const insertCup = (numeroDeVasos, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into cup (cantidad) values (?)",[numeroDeVasos]);
    },
    (t, error) => {
        console.log("Error al insertar la cantidad de vasos");
        console.log(error);
    },
    (_t, _success) => { 
        successFunc;
    }
  );
};


// Borrar la base de datos

const dropDatabaseCupTableAsync = async () => {
  return new Promise ((resolve, reject) =>{
    db.transaction (
      (tx) => {
        tx.executeSql("drop table cup");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla cup ");
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
const setupDatabaseCupTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) =>{
        tx.executeSql(
          "create table if not exists cup  (id integer primary key autoincrement, cantidad text not null)"
        );
      },
      (_t, error) => {
        console.log ("Error al momento de crear la table  cup ");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("tabla cup Creada ");
        resolve(success);
      }
    );
  });
};

const setupCupAsync = async () => {
  return new Promise ((resolve, reject) => {
    db.transaction(
      (tx) => {
        numeroDeVasos.forEach((vaso)=>{
          tx.executeSql("insert into cup (cantidad) values (?)",[vaso]); 
        }) 
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Se insertaron Correctamente el numero de vasos ");
        resolve(success);
      }
    );
  });
};



//---------Tabla Plan del Usuario -----

const getPlans = (setPlansFunc) =>{
  db.transaction((tx) => {
    tx.executeSql(
        "select * from plan",
        [], 
        (_, { rows: { _array }}) => { 
          setPlansFunc(_array);
        },
        (t, error) => {
            console.log("Error al momento de mostrar los datos de la tabla plan"); 
            console.log(error);
        },
        (_t, _success) => {
            console.log("Datos de Plans obtenidos Correctamente");
        }
    );
  });
};


const insertPlan = ( usuarioPlan, comidaPlan, exercisePlan,hidratacionPlan, successFunc) =>{
  db.transaction(
    (tx) => {
        tx.executeSql("insert into plan (id_usuario, id_comida, id_exercise,id_hidratacion) values (?,?,?,?)",[
          usuarioPlan,
          comidaPlan,
          exercisePlan,
          hidratacionPlan
        ]);
    },
    (t, error) => {
        console.log("Error al insertar la cantidad de plan");
        console.log(error);
    },
    (_t, _success) => { 
        successFunc;
    }
  );
};


// Borrar la base de datos

const dropDatabasePlanTableAsync = async () => {
  return new Promise ((resolve, reject) =>{
    db.transaction (
      (tx) => {
        tx.executeSql("drop table plan");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla plan ");
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
const setupDatabasePlanTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) =>{
        tx.executeSql(
          `create table if not exists plan (id integer primary key autoincrement, id_usuario integer not null, 
            id_comida integer not null, id_exercise integer not null , id_hidratacion integer not null,
            foreign key(id_usuario) references users (id),foreign key(id_comida) references food (id),
            foreign key(id_exercise) references exercise (id), foreign key(id_hidratacion) references cup (id) )`
        );
      },
      (_t, error) => {
        console.log ("Error al momento de crear la table plan ");
        console.log(error);
        reject(error);
      },
      (_t, success) =>{
        console.log("tabla Plan Creada ");
        resolve(success);
      }
    );
  });
};


//integer foreign key(id_usuario) references users (id), id_comida integer foreign key(id_comida)
//  references food (id), id_exercise integer foreign key(id_exercise) references exercise (id), 
// id_hidratacion integer foreign key(id_hidratacion) references cup (id)
const setupPlanAsync = async () => {
  return new Promise ((resolve, reject) => {
    db.transaction(
      (tx) => {
        numeroDeVasos.forEach((vaso)=>{
          tx.executeSql("insert into plan (id_usuario, id_comida, id_exercise,id_hidratacion) values (?,?,?,?)",[
            1,
            2,
            1,
            1
          ]); 
        }) 
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        console.log("Se insertaron Correctamente el numero de control ");
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
  getUsuarioById,

  // Comidas

  getFoods,
  insertFood,
  dropDatabaseFoodTableAsync,
  setupDatabaseFoodTableAsync,
  setupFoodAsync,

  // Ejericicios

  getExercises,
  insertExercise,
  dropDatabaseExerciseTableAsync,
  setupDatabaseExerciseTableAsync,
  setupExerciseAsync,

  //Numero de Vasos

  getCups,
  insertCup,
  dropDatabaseCupTableAsync,
  setupDatabaseCupTableAsync,
  setupCupAsync,

  getPlans,
  insertPlan,
  dropDatabasePlanTableAsync,
  setupDatabasePlanTableAsync,
  setupPlanAsync,

};
 

