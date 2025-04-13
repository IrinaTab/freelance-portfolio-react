import {NavLink} from "react-router-dom";

import "./style.css";
import logo from "./../../img/logo.png";
import Burger from "./Burger";


const Navbar = () => {
    
    const activelink = 'top__link top__link_active';
    const normallink ='top__link';

    
    return (   
        <>
            <header className="top">
                <div className="top__wrapper center">
                    
                    <NavLink to="/">
                        <img src={logo} alt="logo" className="top__logo" />
                    </NavLink>
                    
                    <nav className="top__menu">

                        <NavLink to="/" className={({isActive}) => isActive ? activelink : normallink}>Главная</NavLink>
                        <NavLink to="/aboutme" className={({isActive}) => isActive ? activelink : normallink}>Обо мне</NavLink>
                        <NavLink to="/myskills" className={({isActive}) => isActive ? activelink : normallink}>Мои навыки</NavLink>
                        <NavLink to="/projects" className={({isActive}) => isActive ? activelink : normallink}>Мои работы</NavLink>

                    </nav>

                    <Burger />
                    {/* <div className="burger">
                        <button className="burger-btn"></button>
                        <nav className="burger-menu">

                            <NavLink to="/" className="burger-link">Главная</NavLink>
                            <NavLink to="/aboutme" className="burger-link">Обо мне</NavLink>
                            <NavLink to="/myskills" className="burger-link">Мои навыки</NavLink>
                            <NavLink to="/projects" className="burger-link">Мои работы</NavLink>
                            
                        </nav>
                    </div> */}
                </div>
            </header>
        </>  
    );
}
 
export default Navbar;