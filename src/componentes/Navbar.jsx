import React from "react";
import CartWidget from './CartWidget';



const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="*">Nutri-Salud</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="*">Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">Ubicacion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="*">Contacto</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="*" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="*">Frutos Secos</a>
                  <a className="dropdown-item" href="*">Cereales</a>
                  <a className="dropdown-item" href="*">Legumbres</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="*">Especias</a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscador</button>
            </form>
          </div>
          
            <CartWidget/>
        </div>
      </nav>
    )
}

export default Navbar; 

