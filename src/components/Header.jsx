import React from 'react';
import { NavLink , Link } from 'react-router-dom';

function Header() {
  return (
      <header className='navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between align-items-center text-dark'>
        <nav className="container py-3">
        <a className="navbar-brand" href="#">Navbar</a>
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
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" href="#">Action</Link>
                <Link className="dropdown-item" href="#">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" href="#">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" href="#">Disabled</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex align-items-center justify-content-center">
            <input className="form-control mx-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-primary text-primary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </header>
  )
}

export default Header