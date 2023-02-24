import Recipe from "./Recipe";
import style from './Recipes.module.css';
import { Link } from "react-router-dom";

const Recipes = (props)=>{

  

    return(
   
        <section className={style.secRecipe} id="recipes">
            <ul>{
               props.recipes.map((recipe)=><li key={recipe.id}>
                    
                        <Recipe title={recipe.title} publisher={recipe.publisher} img={recipe.image_url} key={recipe.id} 
                        id={recipe.id}
                         unsave={props.unsave}/>
                
                </li>)
            }
               
              
            </ul>
            

        </section>
    )
}

export default Recipes;

