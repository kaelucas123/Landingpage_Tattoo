import React from 'react'
import '../MenuBurguer/MenuBurguer.css'
import { useState } from 'react'
import Logo from '../../Images/Hero/Logo.png'

function MenuBurguer() {
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass('menu hidden')
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div>
            <div className='menuSection'>
                <a href=""><img src={Logo} className='logo' alt="" /></a>
                {/* -------------------------------------------------------- */}
                <div className='navLinks'>
                    <nav >
                        <ul>
                            <li><a href="">Sobre mim</a></li>
                            <li><a href="">Galeria</a></li>
                            <li><a href="">Localização</a></li>
                        </ul>
                    </nav>
                </div>

                {/* --------------------------cell--------------------------- */}
                <div id='menuBurger'>
                    <nav>
                        <div className="burger-menu" onClick={updateMenu}>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                            <div className={burger_class}></div>
                        </div>
                    </nav>
                    <div className={menu_class}>
                        <ul>
                            <li><a href="">Sobre mim</a></li>
                            <li><a href="">Galeria</a></li>
                            <li><a href="">Localização</a></li>
                        </ul>
                    </div>
                </div>
                {/* ------------------------------------------------------------------- */}
            </div>
            {/* ------------------------------------------------------------------- */}
        </div>
    )
}

export default MenuBurguer