import React from "react";
import "./Navbar.css";

const Navbar = ({ conFondo }) => {
  return (
    <div id="contenedor" className={conFondo ? "fondo" : " "}>
      <img
        id="logo"
        src="https://previews.123rf.com/images/yupiramos/yupiramos1711/yupiramos171122101/90294689-.jpg"
      />
      <a type="button" className="mt-5 btn btn-primary" href="/user">
        <span>Usuarios</span>
      </a>
      <button type="button" className="mt-5 btn1 btn btn-primary">
        <span>Seccion2</span>
      </button>
      <button type="button" className="mt-5 btn2 btn btn-primary">
        <span>Seccion3</span>
      </button>
      <div className="input-group buscador">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <button
          type="button"
          className="btn btn-outline-primary boton-buscador"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Navbar;
