import Recipe from "./Recipe";
import style from './Recipes.module.css';
const Recipes = ()=>{

    return(
        <section className={style.secRecipe}>
            <ul>
                <li><Recipe/></li>
                <li><Recipe/></li>
                <li><Recipe/></li>
                <li><Recipe/></li>
                <li><Recipe/></li>
                <li><Recipe/></li>
                <li><Recipe/></li>
            </ul>
            

        </section>
    )
}

export default Recipes;

