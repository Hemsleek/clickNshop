import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemExist = state.cart.some(
        (item: any) => item.id === action.payload.id
      );
      if (itemExist) {
        const newCart: any = state.cart.map((item: any) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          return item;
        });
        return { ...state, cart: newCart };
      }
      return { ...state, cart: state.cart.concat(action.payload) };
    },
    changeQuantity(state, action) {
      const { actionType, id } = action.payload;
      const newCart: any = state.cart.map((item: any) => {
        if (item.id === id) {
          return {
            ...item,
            quantity:
              actionType === "add" ? item.quantity + 1 : item.quantity - 1,
          };
        }

        return item;
      });
      return { ...state, cart: newCart };
    },
    deleteItemFromCart(state, action) {
      const newCart = state.cart.filter(
        (item: any) => item.id !== action.payload
      );
      return { ...state, cart: newCart };
    },
  },
});

export const { addToCart, changeQuantity, deleteItemFromCart } =
  cartReducer.actions;
export default cartReducer.reducer;
