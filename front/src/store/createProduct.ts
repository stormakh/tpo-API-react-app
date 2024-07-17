import { Category, Image } from "@/models/products";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type AcceptedSize = "XS" | "S" | "M" | "L";

export interface Size {
  stock: number;
  AcceptedSize: AcceptedSize;
}

export type Material = {
  description: string;
};

export enum ColorType {
  PRIMARY,
  SECONDARY,
  TERTIARY,
}

export interface Color {
  colorDescription: string;
  colorHex: string;
  colorType: ColorType;
}

export interface ProductRequestDTO {
  description: string;
  price: number;
  sizes: Size[];
  categories: Category[];
  material: Material;
  colors: Color[];
  images: Image[];
}

export const postProduct = createAsyncThunk(
  "product/post",
  async (product: ProductRequestDTO) => {
    const response = await fetch("localhost:8080/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Failed to post product");
    }

    return response.json();
  }
);


export interface createProductState {
    product : ProductRequestDTO;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    
}

export const initialState: createProductState = {
    product: {
        description: "",
        price: 0,
        sizes: [],
        categories: [],
        material: { description: "" },
        colors: [],
        images: [],
    },
    status: "idle",
    error: null,
    };

const createProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      state.product.description = action.payload;
    },

    setPrice: (state, action: PayloadAction<number>) => {
      state.product.price = action.payload;
    },

    addSize: (state, action: PayloadAction<Size>) => {
      state.product.sizes.push(action.payload);
    },

    removeSize: (state, action: PayloadAction<number>) => {
      state.product.sizes.splice(action.payload, 1);
    },

    addCategory: (state, action: PayloadAction<Category>) => {
      state.product.categories.push(action.payload);
    },

    removeCategory: (state, action: PayloadAction<number>) => {
      state.product.categories.splice(action.payload, 1);
    },

    setMaterial: (state, action: PayloadAction<Material>) => {
      state.product.material = action.payload;
    },

    addColor: (state, action: PayloadAction<Color>) => {
      state.product.colors.push(action.payload);
    },

    removeColor: (state, action: PayloadAction<number>) => {
      state.product.colors.splice(action.payload, 1);
    },

    addImage: (state, action: PayloadAction<Image>) => {
      state.product.images.push(action.payload);
    },

    removeImage: (state, action: PayloadAction<number>) => {
      state.product.images.splice(action.payload, 1);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(postProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(postProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});


export default createProductSlice.reducer;