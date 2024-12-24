import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    shop: [],
    items: [],
    currentItem: null,
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

      alreadyHaveItemOn >= 0
        ? state.items[alreadyHaveItemOn].push(action.payload)
        : state.items.push([action.payload]);
    },
    addItemByPlus: (state, action) => {
      state.items[action.payload].push(state.items[action.payload][0]);
    },
    removeItem: (state, action) => {
      if (state.items.length <= 1) state.shop.length = 0;
      if (state.items[action.payload].length <= 1) {
        state.items.splice(action.payload, 1);
      } else {
        state.items[action.payload].pop();
      }
    },
    removeAllItems: (state) => {
      state.items.length = 0;
    },
    addShop: (state, action) => {
      // console.log(action.payload, "qqqqqqqqqqqqqqqqqqqqqqq");
      if (state.shop.length === 0) {
        state.shop[0] = action.payload;
      } else if (action.payload.name !== state.shop[0].name) {
        state.shop[1] = action.payload;
      }
    },
    removeShop: (state) => {
      state.shop.length = 0;
    },
    clearCart: (state) => {
      state: [];
      state.items.length = 0;
    },
    storingCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  addShop,
  removeShop,
  addItemByPlus,
  storingCurrentItem,
  removeAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
