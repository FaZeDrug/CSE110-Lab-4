import React from "react";
import { createContext, useState } from "react";
import { Expense } from "../types/types";
//import { Budget } from "../Budget/Budget"; dont uncommeny this

// Exercise: Create add budget to the context DONE


interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000,
  setBudget: () => {}
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [budget, setBudget] = useState<number>(initialState.budget);

  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        budget: 1000,
        setBudget: setBudget
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
