import React, { useEffect, useState } from "react";

import { database } from "../components/db";

const useDatabase = () => {

    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const loadDatabase = async () => {
        try {
            
            // Await database.droaDatabaseTableAsync();
            //await database.setupDatabaseTableAsync();

            //--- Usuario Componentes----
            // await database.dropDatabaseTableAsync();
            await database.setupDatabaseTableAsync();
            await database.setupUserAsync();

            //----- Comidas Componetes------
            // await database.dropDatabaseFoodTableAsync();
            await database.setupDatabaseFoodTableAsync();
            await database.setupFoodAsync();


            //---- Ejericio Componentes -----
            // await database.dropDatabaseExerciseTableAsync();
            await database.setupDatabaseExerciseTableAsync();
            await database.setupExerciseAsync();


            //--- Vasos de Agua componentes---
            // await database.dropDatabaseCupTableAsync();
            await database.setupDatabaseCupTableAsync();
            await database.setupCupAsync();


            //-- Plan
            // await database.dropDatabasePlanTableAsync();
            // await database.setupDatabasePlanTableAsync();
            // await database.setupPlanAsync();
            
            // finaliza la carga de la DB
            setIsLoadingComplete(true);
        } catch(error) {
            console.log(error);
        }
   };

   useEffect (() => {
       loadDatabase();
   },[]);

   return isLoadingComplete;
};

export default useDatabase;