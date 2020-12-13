import React, { useEffect, useState, createContext} from "react";
import { database } from "../components/db";

export const FoodsContext = createContext({});

export const FoodsContextProvider = ( props ) => {

    // Obtener lo valores iniciales para el contexto
    // se Obtienen desde los props
    const { foods: initialFoods, children } = props;

    // Almacenar los valores en el estado

    const [ foods, setFoods ] = useState(initialFoods);

    useEffect (() =>{
        refreshFoods();
    }, []);

    const refreshFoods = () =>{
        return database.getFoods(setFoods);
    };

    const addNewFood = (nombreComidas) => {
        return database.insertFood(nombreComidas,refreshFoods);
    };

    const foodsContext = {
        foods,
        addNewFood,
    };

    return (
        <FoodsContext.Provider value= {foodsContext}>
            {children}
        </FoodsContext.Provider>
    );
};
