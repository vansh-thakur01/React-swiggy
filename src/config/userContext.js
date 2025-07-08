import {createContext} from 'react';

const context = createContext({loginUser:"default"});
console.log(context,"hhhhh");

export default context;

export const contextForHide = createContext("block");
