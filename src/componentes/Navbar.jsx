import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from './CartWidget';



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>Nutri-Salud</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/almendras"}>Almendras
                  <span className="visually-hidden">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/avellanas"}>Avellanas</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/castañasdecaju"}>Castañas de caju</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/category/nueces"}>Nueces</NavLink>
              </li>
            </ul>
          </div>
          
            <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar; 

