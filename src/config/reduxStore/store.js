import { combineReducers, combineSlices, configureStore, createStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js";
import dataSlice from "./dataSlice.js";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        data:dataSlice,
    }
});

// const s = combineReducers({
//     cart:cartSlice,
//     t:dataSlice,
// })

// const o = createStore(s);
console.log(store);
export default store;