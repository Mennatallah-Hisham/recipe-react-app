import { useSelector } from "react-redux";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipes from "../components/Recipe/Recipes"
const Saved =()=>{

    const recipes = useSelector(state=>state.save.recipes);


    return(<div>
       <ToastContainer 
    autoClose={1500} 
    theme="light"
    />
        
        <h2 className="heading-secondary">saved recipes</h2>
        {recipes.length===0? <p className="error"> no saved recipes</p> : <Recipes recipes={recipes} unsave="true" />}
      
       
    </div>)
}

export default Saved;