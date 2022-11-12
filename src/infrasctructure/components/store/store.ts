import { productReducer } from "../../../features/components/reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";

export const appStore = configureStore({
    reducer: {
        products: productReducer,
    },
});

export type rootStore = typeof appStore;
export type rootState = ReturnType<typeof appStore.getState>;
