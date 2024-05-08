import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSession } from '@/models/users';
import { Product } from '@/models/products';
import { shoppingItem } from '@/models/shoppingItem';
// Define the initial state interface
export interface AppState {
    products: Product[];
    userSession: UserSession | null;
}



// Create a products slice
const productsSlice = createSlice({
    name: 'products',
    initialState: [] as shoppingItem[],
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            console.log(action.payload.id);
            const product = state.find((prod) => prod.id === action.payload.id);
            console.log(product?.id);
            if (product != null){
              product.amount+=1;  
            }
            else{
                state.push({...action.payload,amount:1});  
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const index = state.findIndex((product) => product.id === action.payload);
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
        },
        addAmountToProduct: (state, action: PayloadAction<{id:number,amount:number}>) =>{
            const product = state.find((prod) => prod.id = action.payload.id);
            if (product){
              product.amount+=action.payload.amount;  
            }
        },
        discountAmountToProduct: (state, action: PayloadAction<{id:number, amount:number}>) =>{
            const product = state.find((prod) => prod.id = action.payload.id);
            if (product && action.payload.amount<=product.amount){
              product.amount = product.amount - action.payload.amount;  
            }
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
export const { addProduct, removeProduct, clearProducts, addAmountToProduct,discountAmountToProduct} = productsSlice.actions;
export const { setUserSession, clearUserSession } = userSessionSlice.actions;