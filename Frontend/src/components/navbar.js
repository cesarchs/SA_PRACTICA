import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class NavBar extends Component {  

  render() {
    return (
        <div className="container fixed-top bg-dark">
        <nav className="navbar navbar-expand-md navbar-dark pt-3">
            <Link to="/" className="navbar-brand" >PRACTICA 1</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                      <button className="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">
                        SOAP
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu hijos">
                        <Link to="/" className="dropdown-item">MARVEL</Link>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <button className="btn btn-dark dropdown-toggle" type="button" data-toggle="dropdown">
                        REST
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu hijos">
                        <Link to="/" className="dropdown-item">POKEMON Y POSTMAN</Link>
                      </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
  }
}
