import style from './Search.module.css';
import { useRef } from "react";
import { useDispatch } from 'react-redux';
import { HomeActions } from '../../store/HomeRecipeSlice';
const Search =()=>{
    const dispatch =useDispatch();

    const getRecipes =async(recipe)=>{
 
   
        try{
           
            const request = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${recipe}`)
    
            if(!request.ok){
                throw new Error("couldn't fetch recipes")
            }
            const response = await request.json();
            if(response.results===0){
                throw new Error (" no recipes found")
            }
          
            dispatch(HomeActions.updateRecipes(response.data.recipes));
           
    
        }catch(e){
            console.log(e);
    
        }
    
    
    }
    
const  searchRef= useRef();
    const fromHandler =(e)=>{
        e.preventDefault();
   
        getRecipes(searchRef.current.value);

    }

    return(
    
        <form className={style.searchForm} onSubmit={fromHandler}>
        <input type="text"placeholder="search ..." ref={searchRef}></input>
        <button>search</button>
    </form>
    )
}

export default Search;