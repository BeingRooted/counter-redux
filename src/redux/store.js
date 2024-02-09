import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const store=configureStore ({
    reducer:{
        // reducer should be in the key value pair
        counter:counterSlice
    }
})



