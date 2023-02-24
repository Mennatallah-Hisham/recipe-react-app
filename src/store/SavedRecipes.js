import { createSlice } from "@reduxjs/toolkit";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState ={
    recipes:[],
}

const savedNotify =()=>toast("recipe saved" ,{
    position: toast.POSITION.TOP_CENTER,

    theme:'light'
});
const alreadySavedNotify =()=>toast("recipe is already saved",{
    position: toast.POSITION.TOP_CENTER,

    theme:'light'
});

const unSaveNotify =()=>toast("recipe unsaved",{
    position: toast.POSITION.TOP_CENTER,

    theme:'light'
});

const savedSlice = createSlice({
    name:"savedSlice",
    initialState,
    reducers:{

        addRecipe(state,action){
         
            const newRecipe ={...action.payload};
            const RecipeId =action.payload.id;
            const exists =state.recipes.some((r)=>r.id===RecipeId);
            if(exists){
              alreadySavedNotify();
            }else{
                state.recipes.push(newRecipe);
              savedNotify();
               
            }
            
            
          

          

        },
        removeRecipe(state,action){
       
          state.recipes= state.recipes.filter(recpie=>recpie.id!==action.payload);
     unSaveNotify();
            

        }
    }
})


export const savedActions =savedSlice.actions;
export default savedSlice;
