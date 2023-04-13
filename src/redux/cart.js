import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const exist = state.value.find((x) => x.id === product.id);
      console.log(state.value);
      if (exist) {
        exist.qty += 1;
      } else {
        state.value.push({ ...product, qty: 1 });
      }
      return state;
    },
    deleteItem: (state, action) => {
      const product = action.payload;
      const index = state.value.findIndex((x) => x.id === product.id);
      if (index !== -1) {
        // Check if quantity is greater than 1
        if (state.value[index].qty > 1) {
          // Decrement the quantity of the product
          state.value[index].qty--;
        } else {
          // Remove the product from the state array
          state.value.splice(index, 1);
        }
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
