
import style from './Category.module.css';
const Category =()=>{
    return(
        <article className={style.categoryCard}>
           
         
            {/* <img src= "../../../public/imgs/pizza2.jpg" alt=""/> */}
            <img src={require("../../images/pizza2.jpg")} alt=""/>
        
            <h3>pizza</h3>
        </article>
    )
}


export default Category;