import React, { createContext, useReducer } from 'react';
import { InitialState, UserReducer } from '../Reducers/UserReducer';

export const userContext = createContext();

export default ({children}) => {
    const [state, dispatch] = useReducer (UserReducer, InitialState);

    return (
        <userContext.Provider value={{state, dispatch}}>
            {children}
        </userContext.Provider>
    )
}
