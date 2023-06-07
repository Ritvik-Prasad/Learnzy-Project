import { DataContext } from "../context/DataContext";
import { useContext } from "react";

export const useDataContext = () => {
    const context = useContext(DataContext)
    if(!context){
        throw Error('useDataCOntext must be used insiade an DataContextProvider')
    }

    return context 
}