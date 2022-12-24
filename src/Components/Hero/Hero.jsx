import React from 'react'
// import { FaBars, FaTimes } from "react-icons/fa"
import './Hero.css'
import { useState } from 'react'
import Logo from '../../Images/Hero/Logo.png'


function Hero() {
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
    <div className='container'>
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
      <div id='hero'>
        <div id='michael'>
          <svg width="28" height="506" viewBox="0 0 28 506" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="14" width="3" height="176" fill="#D9D9D9" />
            <rect x="14" y="330" width="3" height="176" fill="#D9D9D9" />
            <path d="M8.16 289.32L22 289.32L22 291.14L11.68 291.14L22 295.74L22 297.02L11.66 301.64L22 301.64L22 303.46L8.16 303.46L8.16 301.5L19.6 296.38L8.16 291.26L8.16 289.32ZM9.26 279.961C9.26 280.308 9.14 280.601 8.9 280.841C8.66 281.081 8.36666 281.201 8.02 281.201C7.67333 281.201 7.38 281.081 7.14 280.841C6.9 280.601 6.78 280.308 6.78 279.961C6.78 279.628 6.9 279.348 7.14 279.121C7.38 278.881 7.67333 278.761 8.02 278.761C8.36666 278.761 8.66 278.881 8.9 279.121C9.14 279.348 9.26 279.628 9.26 279.961ZM11.04 279.081L22 279.081L22 280.901L11.04 280.901L11.04 279.081ZM16.5 271.327C15.3667 271.327 14.38 271.101 13.54 270.647C12.6867 270.194 12.0267 269.567 11.56 268.767C11.0933 267.954 10.86 267.027 10.86 265.987C10.86 264.641 11.1867 263.534 11.84 262.667C12.4933 261.787 13.4 261.207 14.56 260.927L14.56 262.887C13.8933 263.074 13.3667 263.441 12.98 263.987C12.5933 264.521 12.4 265.187 12.4 265.987C12.4 267.027 12.76 267.867 13.48 268.507C14.1867 269.147 15.1933 269.467 16.5 269.467C17.82 269.467 18.84 269.147 19.56 268.507C20.28 267.867 20.64 267.027 20.64 265.987C20.64 265.187 20.4533 264.521 20.08 263.987C19.7067 263.454 19.1733 263.087 18.48 262.887L18.48 260.927C19.6 261.221 20.5 261.807 21.18 262.687C21.8467 263.567 22.18 264.667 22.18 265.987C22.18 267.027 21.9467 267.954 21.48 268.767C21.0133 269.567 20.3533 270.194 19.5 270.647C18.6467 271.101 17.6467 271.327 16.5 271.327ZM10.84 247.727C10.84 246.9 11.02 246.154 11.38 245.487C11.7267 244.82 12.2533 244.3 12.96 243.927C13.6667 243.54 14.5267 243.347 15.54 243.347L22 243.347L22 245.147L15.8 245.147C14.7067 245.147 13.8733 245.42 13.3 245.967C12.7133 246.514 12.42 247.26 12.42 248.207C12.42 249.167 12.72 249.934 13.32 250.507C13.92 251.067 14.7933 251.347 15.94 251.347L22 251.347L22 253.167L7.2 253.167L7.2 251.347L12.6 251.347C12.04 250.987 11.6067 250.494 11.3 249.867C10.9933 249.227 10.84 248.514 10.84 247.727ZM16.48 235.722C15.36 235.722 14.38 235.495 13.54 235.042C12.6867 234.589 12.0267 233.969 11.56 233.182C11.0933 232.382 10.86 231.495 10.86 230.522C10.86 229.562 11.0667 228.729 11.48 228.022C11.8933 227.315 12.4133 226.789 13.04 226.442L11.04 226.442L11.04 224.602L22 224.602L22 226.442L19.96 226.442C20.6 226.802 21.1333 227.342 21.56 228.062C21.9733 228.769 22.18 229.595 22.18 230.542C22.18 231.515 21.94 232.395 21.46 233.182C20.98 233.969 20.3067 234.589 19.44 235.042C18.5733 235.495 17.5867 235.722 16.48 235.722ZM16.5 226.442C15.6733 226.442 14.9533 226.609 14.34 226.942C13.7267 227.275 13.26 227.729 12.94 228.302C12.6067 228.862 12.44 229.482 12.44 230.162C12.44 230.842 12.6 231.462 12.92 232.022C13.24 232.582 13.7067 233.029 14.32 233.362C14.9333 233.695 15.6533 233.862 16.48 233.862C17.32 233.862 18.0533 233.695 18.68 233.362C19.2933 233.029 19.7667 232.582 20.1 232.022C20.42 231.462 20.58 230.842 20.58 230.162C20.58 229.482 20.42 228.862 20.1 228.302C19.7667 227.729 19.2933 227.275 18.68 226.942C18.0533 226.609 17.3267 226.442 16.5 226.442ZM16.1 206.194C16.4467 206.194 16.8133 206.214 17.2 206.254L17.2 215.014C18.28 214.948 19.1267 214.581 19.74 213.914C20.34 213.234 20.64 212.414 20.64 211.454C20.64 210.668 20.46 210.014 20.1 209.494C19.7267 208.961 19.2333 208.588 18.62 208.374L18.62 206.414C19.6733 206.708 20.5333 207.294 21.2 208.174C21.8533 209.054 22.18 210.148 22.18 211.454C22.18 212.494 21.9467 213.428 21.48 214.254C21.0133 215.068 20.3533 215.708 19.5 216.174C18.6333 216.641 17.6333 216.874 16.5 216.874C15.3667 216.874 14.3733 216.648 13.52 216.194C12.6667 215.741 12.0133 215.108 11.56 214.294C11.0933 213.468 10.86 212.521 10.86 211.454C10.86 210.414 11.0867 209.494 11.54 208.694C11.9933 207.894 12.62 207.281 13.42 206.854C14.2067 206.414 15.1 206.194 16.1 206.194ZM15.72 208.074C15.0267 208.074 14.4333 208.228 13.94 208.534C13.4333 208.841 13.0533 209.261 12.8 209.794C12.5333 210.314 12.4 210.894 12.4 211.534C12.4 212.454 12.6933 213.241 13.28 213.894C13.8667 214.534 14.68 214.901 15.72 214.994L15.72 208.074ZM7.2 196.64L22 196.64L22 198.46L7.2 198.46L7.2 196.64Z" fill="white" />
          </svg>
        </div>
          <div className='seta'>
            <div className='ball'></div>
          </div>

      </div>

    </div>
  )
}

export default Hero