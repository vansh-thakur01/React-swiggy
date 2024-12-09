import {createContext} from 'react';

const context = createContext({loginUser:"default"});
export default context;

export const contextForHide = createContext("block");
