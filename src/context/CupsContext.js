import React, { useEffect, useState, createContext} from "react";
import { database } from "../components/db";

export const CupsContext = createContext({});

export const CupsContextProvider = ( props ) => {

    // Obtener lo valores iniciales para el contexto
    // se Obtienen desde los props
    const { cups: initialCups, children } = props;

    // Almacenar los valores en el estado

    const [ cups, setCups ] = useState(initialCups);

    useEffect (() =>{
        refreshCups();
    }, []);

    const refreshCups = () =>{
        return database.getCups(setCups);
    };

    const addNewCup = (vaso) => {
        return database.insertFood(vaso,refreshCups);
    };

    const cupsContext = {
        cups,
        addNewCup,
    };

    return (
        <CupsContext.Provider value= {cupsContext}>
            {children}
        </CupsContext.Provider>
    );
};