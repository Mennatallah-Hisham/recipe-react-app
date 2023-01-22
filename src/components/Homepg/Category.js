
import { useState ,useEffect } from 'react';
import style from './Category.module.css';
const Category =(props)=>{

   
    const changeRecipe=()=>{
       
      props.changeRecipeHandler(props.title);
        
    }
    
   


    return(
        <button onClick={changeRecipe}>
  <article className={style.categoryCard} >
           
         
           <img src={props.src} alt=""/>
           
       
           <h3>{props.title}</h3>
       </article>
        </button>
   )
      
}


export default Category;