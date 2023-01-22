import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    recipes:[],
}

const savedSlice = createSlice({
    name:"savedSlice",
    initialState,
    reducers:{

        addRecipe(state,action){
         
            const newRecipe ={...action.payload};
            const RecipeId =action.payload.id;
            const exists =state.recipes.some((r)=>r.id===RecipeId);
            if(exists){
                alert("recipe is already saved");
            }else{
                state.recipes.push(newRecipe);
                alert(" recipe saved ");
            }
            
            
          

          

        },
        removeRecipe(state,action){
       
          state.recipes= state.recipes.filter(recpie=>recpie.id!==action.payload);
     
            

        }
    }
})


export const savedActions =savedSlice.actions;
export default savedSlice;
