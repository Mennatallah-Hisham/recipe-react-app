
import style from "./Nav.module.css";
const Nav =()=>{
    return(
        <div className={style.mainHeader}>
            <p className={style.logo}>your recipe</p>
           
            <nav className={style.nav}>
                <ul>
                    <li>home</li>
                    <li>favorites</li>
                </ul>
            </nav>
        </div>
    )


}
export default  Nav;