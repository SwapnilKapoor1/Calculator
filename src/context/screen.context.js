import { useContext, useState } from "react";
import { createContext } from "react";

const screenContext=createContext();

function useScreen(){
    return useContext(screenContext);
}
function ScreenContext({children}){
    const [value,setValue]=useState('0');

   

    return(
        <screenContext.Provider value={{value,setValue}}>
            {children}
        </screenContext.Provider>
    )
}
export {ScreenContext,useScreen};