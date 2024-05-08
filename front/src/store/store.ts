import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSession } from "@/models/users";
import { Product } from "@/models/products";
import { shoppingCart, shoppingItem } from "@/models/shoppingCart";
// Define the initial state interface
export interface AppState {
  shoppingCart: shoppingCart;
  userSession: UserSession | null;
}

const initialShoppingCart: shoppingCart = {
  products: [] as shoppingItem[],
  totalAmount: 0,
  totalPrice: 0,
};

// Create a products slice
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: initialShoppingCart as shoppingCart,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      console.log(action.payload.id);
      const product = state.products.find(
        (prod) => prod.id === action.payload.id
      );

      if (product != null) {
        product.amount += 1;
      } else {
        state.products.push({ ...action.payload, amount: 1 });
        state.totalAmount += 1;
        state.totalPrice += action.payload.price;
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.products.splice(index, 1);
        state.totalAmount -= 1;
        state.totalPrice -= state.products[index].price;
      }
    },
    setProductPrice: (
      state,
      action: PayloadAction<{ id: number; price: number }>
    ) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.price = action.payload.price;
      }
    },
    setProductColors: (
      state,
      action: PayloadAction<{ id: number; colors: string[] }>
    ) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.colors = action.payload.colors;
      }
    },
    setProductSizes: (
      state,
      action: PayloadAction<{ id: number; sizes: string[] }>
    ) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.sizes = action.payload.sizes;
      }
    },
    clearProducts: (state) => {
      state.products = [];
    },
    addAmountToProduct: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const product = state.products.find(
        (prod) => (prod.id = action.payload.id)
      );
      if (product) {
        product.amount += action.payload.amount;
        state.totalAmount += action.payload.amount;
        state.totalPrice += product.price * action.payload.amount;
      }
    },
    discountAmountToProduct: (
      state,
      action: PayloadAction<{ id: number; amount: number }>
    ) => {
      const product = state.products.find(
        (prod) => (prod.id === action.payload.id)
      );
      if (product && product.amount > action.payload.amount && product.amount > 0)  {
        product.amount = product.amount - action.payload.amount;
        state.totalAmount -= action.payload.amount;
        state.totalPrice -= product.price * action.payload.amount;
      }
    },
  },
});

// Create a user session slice
const userSessionSlice = createSlice({
  name: "userSession",
  initialState: null as UserSession | null,
  reducers: {
    setUserSession: (_state, action: PayloadAction<UserSession>) => {
      console.log("user updated in store");
      return action.payload;
    },
    clearUserSession: (_state) => {
      return null;
    },
  },
});

// Combine the slices into a single reducer
const rootReducer = {
  shoppingCart: shoppingCartSlice.reducer,
  userSession: userSessionSlice.reducer,
};

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

// Export the store
export default store;

// Export the action creators
export const {
  addProduct,
  removeProduct,
  clearProducts,
  addAmountToProduct,
  discountAmountToProduct,
} = shoppingCartSlice.actions;
export const { setUserSession, clearUserSession } = userSessionSlice.actions;
