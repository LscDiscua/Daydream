import React, { useEffect, useState } from "react";
import { database } from "../components/db";

const useDatabase = () => {
    const [isLoadingComplete, setIsLoadingComplete] = useState(false);

    const loadDatabase = async () => {
        try {
            
            // Await database.droaDatabaseTableAsync();
            //await database.setupDatabaseTableAsync();

            // await database.dropDatabaseTableAsync();
            // await database.setupDatabaseTableAsync();
            // await database.setupUserAsync();
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