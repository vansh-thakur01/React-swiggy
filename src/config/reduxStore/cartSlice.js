import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shop: null,
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      let alreadyHaveItemOn;
      const items = JSON.parse(JSON.stringify(state.items)); 
      if (items.length > 0) {
        alreadyHaveItemOn = items.findIndex((val) => {
        return val[0].name === action.payload.name;
        });
      }
      
      (alreadyHaveItemOn >= 0) ? state.items[alreadyHaveItemOn].push(action.payload) : state.items.push([action.payload]);
      
    },
    addItemByPlus:(state,action)=>{
        state.items[action.payload].push(((state.items[action.payload][0])));
    },
    removeItem: (state,action) => {
        if (state.items[action.payload].length <= 1) {
          state.items.splice(action.payload, 1);
        } else {
          state.items[action.payload].pop();
        }
    },
    addShop: (state, action) => {
      state.shop = action.payload;
    },
    removeShop: (state) => {
      state.shop = null;
    },
    clearCart: (state) => {
      state: [];
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart, addShop, removeShop ,addItemByPlus} =
  cartSlice.actions;
export default cartSlice.reducer;
