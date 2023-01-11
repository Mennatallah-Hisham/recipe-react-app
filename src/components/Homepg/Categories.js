import Category from "./Category";
import style from "./Categories.module.css";

const Categories =()=>{

    return(
        <section className={`${style.secCat} `}>
            <h2> what to eat today ? </h2>
            <ul>
                <li><Category/></li>
                <li><Category/></li>
                <li><Category/></li>
                <li><Category/></li>
                <li><Category/></li>
            </ul>

        </section>
    )
}

export default Categories;