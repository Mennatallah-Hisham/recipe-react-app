
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav =()=>{
    return(
        <div className={style.mainHeader}>
            
            <Link to="/">
                <p className={style.logo}>Your Recipe</p>
                </Link>
           
            <nav className={style.nav}>
               
                        <Link to="/saved">
                        saved
                        </Link>
                       
            </nav>
        </div>
    )


}
export default  Nav;