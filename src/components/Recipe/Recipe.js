import style from './Recipe.module.css';

const Recipe =()=>{
    return(
        <article className={style.recipeCard}>
<img src={require("../../images/pizza2.jpg")} alt=""/>

<p className={style.title}>Cauliflower Pizza Crust (with BBQ Chicken Pizza)</p>
<p className={style.publisher}><span>publisher:</span> Closet Cooking</p>

        </article>
    )
}

export default Recipe;