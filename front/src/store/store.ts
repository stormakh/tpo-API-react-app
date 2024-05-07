import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSession } from '@/models/users';
import { Product } from '@/models/products';
import { cartProduct } from '@/models/cartProduct';

// Define the initial state interface
export interface AppState {
    products: Product[];
    userSession: UserSession | null;
}


// Create a products slice
const productsSlice = createSlice({
    name: 'products',
    initialState: [] as cartProduct[],
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            const product = state.find(ShoppingItem => ShoppingItem.id === action.payload.id);
            if(product){
                product.quantity+=1;
            }
            state.push({...action.payload,quantity:1});
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((ShoppingItem) => ShoppingItem.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        setProductPrice: (state, action: PayloadAction<{ id: number, price: number }>) => {
            const product = state.find((product) => product.id === action.payload.id);
            if (product) {
                product.price = action.payload.price;
            }
        },
        setProductColors: (state, action: PayloadAction<{ id: number, colors: string[] }>) => {
            const product = state.find((product) => product.id === action.payload.id);
            if (product) {
                product.colors = action.payload.colors;
            }
        },
        setProductSizes: (state, action: PayloadAction<{ id: number, sizes: string[] }>) => {
            const product = state.find((product) => product.id === action.payload.id);
            if (product) {
                product.sizes = action.payload.sizes;
            }
        },
        clearProducts: (state) => {
            state = [];
        }
    },
});

// Create a user session slice
const userSessionSlice = createSlice({
    name: 'userSession',
    initialState: null as UserSession | null,
    reducers: {
        setUserSession: (_state, action: PayloadAction<UserSession>) => {
            console.log('user updated in store')
            return action.payload;
        },
        clearUserSession: (_state) => {
            return null
        },
    },
});


// Combine the slices into a single reducer
const rootReducer = {
    products: productsSlice.reducer,
    userSession: userSessionSlice.reducer,
};

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

// Export the store
export default store;

// Export the action creators
export const { addProduct, removeProduct, clearProducts } = productsSlice.actions;
export const { setUserSession, clearUserSession } = userSessionSlice.actions;