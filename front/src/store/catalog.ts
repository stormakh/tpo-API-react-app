import { ProductDetail } from "@/models/products";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:8080/front/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = (await response.json()).items as ProductDetail[];
    return data;
  }
);

export type CatalogState = {
  products: ProductDetail[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

const initialState: CatalogState = {
  products: [],
  status: "idle",
  error: null,
} satisfies CatalogState;

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

export default productsSlice.reducer;