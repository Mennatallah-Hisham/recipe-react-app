import { configureStore } from "@reduxjs/toolkit";
import HomeRecipeSlice from "./HomeRecipeSlice";
import savedSlice from "./SavedRecipes";

const AppStore = configureStore({
    reducer:{
        home:HomeRecipeSlice.reducer,
        save:savedSlice.reducer,
    }
})


export  default AppStore;