import {createContext} from 'react';

const context = createContext({loginUser:"login"});
export default context;

export const contextForHide = createContext("block");
