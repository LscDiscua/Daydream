import React, { useEffect, createContext, useState } from "react";
import { database } from "../components/db";

// Crear el contexto de la base

export const PlansContext = createContext({});

export const PlansContextProvider = (props) =>{

    //Obtener los valores iniciales para el contexto


    const { plans: initialPlans, children } = props;

    const [ plans, setPlans] = useState(initialPlans);

    useEffect (() => {
        refreshPlans();

    }, []);

    const refreshPlans = () => {
        return database.getPlans(setPlans);
    }

    const addNewPlan = async(usuarioPlan, comidaPlan, exercisePlan,hidratacionPlan) => {
        
        await database.insertPlan(usuarioPlan, comidaPlan, exercisePlan,hidratacionPlan,refreshPlans);
        return refreshPlans();
    }

    const plansContext = {
        plans,
        addNewPlan,
    }

    return (
        <PlansContext.Provider value = {plansContext}>
            {children}
        </PlansContext.Provider>
    );

};


