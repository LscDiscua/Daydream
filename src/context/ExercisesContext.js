import React, { useEffect, useState, createContext} from "react";
import { database } from "../components/db";

export const ExercisesContext = createContext({});

export const ExercisesContextProvider = (props) => {

    // Obtener lo valores iniciales para el contexto
    // se Obtienen desde los props

    const { exercises: initialExercises, children } = props;

    // Almacenar los valores en el estado

    const [ exercises, setExercises ] = useState(initialExercises);

    useEffect(() => {
        refreshExercises();
    }, []);

    const refreshExercises = () => {
        
         return database.getExercises(setExercises);
    };

    const addNewExercise = (ejercicio) => {

        return database.insertExercise(ejercicio,refreshExercises);
    };

    // const addNewExercise = async (ejercicio) => {
    //     await database.insertExercise(ejercicio,refreshExercises);
    //     return refreshExercises();
    // };


    const exercisesContext = {
        exercises,
        addNewExercise,
    };

    return (
        <ExercisesContext.Provider value = {exercisesContext}>
            {children}
        </ExercisesContext.Provider>
    );

};