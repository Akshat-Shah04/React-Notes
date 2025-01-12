import { configureStore } from "@reduxjs/toolkit";
import userDetails from "../feacture/userDetails";

export const store = configureStore({
    reducer :{
        app:userDetails,
    }
})