import style from "./HomePage.module.css";
import Categories from "../components/Homepg/Categories";
import Recipes from "../components/Recipe/Recipes";
const HomePage =()=>{

    return(
        <main>
            <header className={style.header}>
            <form className={style.searchForm}>
                <input type="text"placeholder="search ..."></input>
                <button>search</button>
            </form>
            </header>
            <Categories/>

            <Recipes/>
        </main>
    )
    
   
}

export default HomePage;