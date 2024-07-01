import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Slices/CartSlice'

export const store=configureStore({
    reducer:todoReducer,
});

