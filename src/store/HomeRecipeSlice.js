import {createSlice} from '@reduxjs/toolkit';
const initialState={
    recipes:[]
}

const HomeRecipeSlice = createSlice({
    name:"HomeRecipes",
    initialState,
    reducers:{
        updateRecipes(state,action){
            state.recipes=action.payload

        }
    }

})


export const HomeActions =HomeRecipeSlice.actions;

export default HomeRecipeSlice;