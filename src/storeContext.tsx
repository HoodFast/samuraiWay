import React from "react";
import {store} from "./Redux/redux-store";
import App from "./App";

export const StoreContext:any = React.createContext(null)

export const Provider = (props)=>{
    return <StoreContext.Provider value={props.store}>
        {props.children}
        </StoreContext.Provider>
}