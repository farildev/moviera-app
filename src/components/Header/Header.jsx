import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./header.module.scss";

function Header() {
  return (
    <header className={style.header} >
      <nav className={`${style.navbar} container`}>
        <div className="logo">
          Market
        </div>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink className={style.navLink} to={"/"}>Home</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink className={style.navLink} to={"/"}>Products</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink className={style.navLink} to={"/"}>Shop</NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink className={style.navLink} to={"/"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header