import style from './Recipe.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { savedActions } from '../../store/SavedRecipes';

const Recipe =(props)=>{
    const dispatch =useDispatch();

    const unsaveHandler=()=>{
        dispatch(savedActions.removeRecipe(props.id));

    }
    return(
        <article className={style.recipeCard}>
            <Link to={`/recipe/${props.id}`}>
<img src={props.img} alt={props.title}/>

            </Link>

            <Link to={`/recipe/${props.id}`}>
<p className={style.title}>{props.title}</p>
                </Link>
<p className={style.publisher}><span>publisher:</span> {props.publisher}</p>


{(props.unsave==="true") && <button
className='btn'
onClick={unsaveHandler}
>unsave</button>

}


        </article>
    )
}

export default Recipe;