import style from "./HomePage.module.css";
import Categories from "../components/Homepg/Categories";
import Recipes from "../components/Recipe/Recipes";
import Search from "../components/Homepg/Search";
import { useSelector } from "react-redux";
const HomePage =()=>{
    const recipes =useSelector(state=>state.home.recipes);
    return( 
        <main>
            <header className={style.header}>
            <Search/>
            </header>
            <Categories/>
           
            <Recipes recipes={recipes}/>
        </main>
    )
    
   
}

export default HomePage;