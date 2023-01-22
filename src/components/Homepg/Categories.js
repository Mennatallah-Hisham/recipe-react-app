import Category from "./Category";
import style from "./Categories.module.css";
import { useEffect ,useState} from "react";

import {useDispatch} from 'react-redux';

import { HomeActions } from "../../store/HomeRecipeSlice";
const categoriesList=[
    {id:"1",
title:"pizza",

img:require("../../images/pizza2.jpg"),
},
    {id:"2",
title:"pasta",
img:require("../../images/pasta.jpg"),
},
    {id:"3",
title:"chicken",
img:require("../../images/chicken.jpg"),
},
    {id:"4",
title:"steak",
img:require("../../images/beef.jpg"),
},
    {id:"5",
title:"seafood",
img:require("../../images/seafood.jpg"),
},
    {id:"6",
title:"salad",
img:require("../../images/salad.jpg"),
},


]
const Categories =()=>{

const dispatch =useDispatch()
const [recipe,setRecipe]=useState("pizza");

const getRecipes =async()=>{
 
   
    try{
       
        const request = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`)

        if(!request.ok){
            throw new Error("couldn't fetch recipes")
        }
        const response = await request.json();
        dispatch(HomeActions.updateRecipes(response.data.recipes));
       

    }catch(e){
        console.log(e);
        alert(e.message);

    }


}


useEffect(()=>{
getRecipes(recipe);
  },[recipe]);

  const changeRecipe=(recipe)=>{

   setRecipe(recipe);
  }

    return(
        <section className={`${style.secCat} `}>
            <h2 className="heading-secondary"> what to eat today ? </h2>
            <ul>
                {categoriesList.map((item)=><li key={item.id} >
                    <Category key={item.id} title={item.title}
                    src={item.img} changeRecipeHandler={changeRecipe}/>
                </li>)}
               
            </ul>

        </section>
    )
}

export default Categories;