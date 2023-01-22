import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savedActions } from "../store/SavedRecipes";
import style from './ViewRecipe.module.css';
const ViewRecipe = ()=>{
    const {id}=useParams();
    const[recipe,setRecipe]=useState(null);
   const dispatch = useDispatch();
    
    const getRecipe =async()=>{
        try{
            const request = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            if(!request.ok){
                throw new Error("couldn't display recipe")
            }
            const response =await request.json();
            setRecipe(response.data.recipe);
          
        }catch(e){
            console.log(e)
        }
      

    }

    useEffect(()=>{
        getRecipe();
    },[]);

    const saveHandler=()=>{
        dispatch(savedActions.addRecipe({
            id:recipe.id,
            image_url:recipe.image_url,
            title:recipe.title,
            publisher:recipe.publisher

        }))

    }
    if(recipe===null){
        return;
    }
    return (
   <div className={style.wrapper}>

   
        <main className={style.recipeContainer}>

<img src={recipe.image_url} alt={recipe.title}/>
            <h1>{recipe.title}</h1>

            <section>
                <div className={style.headCont}> 
                    <p>cooking time:<span>{recipe.cooking_time}</span> min</p>
                    <p>servings:<span>{recipe.servings}</span> </p>
                    <button className="btn" onClick={saveHandler}>save</button>

                </div>
                <div className={style.ingredients}>
                    <h2>ingredients</h2>
                    <ul>
                    {recipe.ingredients.map((ing)=>
                        <li><span className={style.bold}>{ing.quantity}</span><span
                        className={style.bold}>{ing.unit}</span><span>{ing.description}</span>
                        </li>
                    )}
                    </ul>
                   
                  
                </div>

            </section>

        </main>
        </div>
    )
}

export default ViewRecipe;