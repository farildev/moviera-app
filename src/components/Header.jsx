import React from 'react';
import { NavLink , Link } from 'react-router-dom';

function Header() {
  
  return (
      <header className='navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between align-items-center text-dark'>
        <nav className="container py-3">
        <Link className="navbar-brand" to={'/'}>Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to={'/'}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/products'}>Products</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex col-6 align-items-center justify-content-center">
            <input className="form-control mx-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search"/>
          </form>
          <div className='bg-light p-2 '>
            <Link to={'/basket'}>Basket</Link>
          </div>
        </div>
      </nav>
      </header>
  )
}

export default Header