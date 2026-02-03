import React from 'react'
import style from "./Header.module.css"

const Header = () => {
  return (
    <nav className={style.nav}>
        <h1>HUZAIFA</h1>
        <a href="https://facebook.com/">Facebook</a>
    </nav>
  )
}

export default Header