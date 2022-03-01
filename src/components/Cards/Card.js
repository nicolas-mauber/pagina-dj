import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="contenedor-card pb-5 pt-3">
      <h2 className="mensaje-card-seccion">ALGUNOS DE LOS DJ's REGISTRADOS</h2>
      <div className="clase-prueba">
        <div className="card text-white bg-info mb-3">
          <div className="card-header">
            <img
              className="foto-persona"
              src="https://cdn-icons-png.flaticon.com/512/3225/3225283.png"
              alt="foto dj1"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">DJ numero 1</h5>
            <p className="card-text">
              Amet proident nulla occaecat et aute cupidatat dolore eu qui enim Lorem laborum veniam commodo.
            </p>
          </div>
        </div>
        <div className="card text-white bg-info mb-3">
          <div className="card-header">
            <img
              className="foto-persona"
              src="https://img.freepik.com/vector-gratis/lindo-astronauta-tocando-musica-electronica-dj-ilustracion-icono-dibujos-animados-auriculares-concepto-icono-tecnologia-ciencia_138676-2113.jpg?size=338&ext=jpg"
              alt="foto dj1"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">DJ numero 2</h5>
            <p className="card-text">
              Ipsum duis nisi deserunt enim.Eiusmod ut cillum cupidatat do adipisicing.
            </p>
          </div>
        </div>
        <div className="card text-white bg-info mb-3">
          <div className="card-header">
            <img
              className="foto-persona"
              src="https://media.istockphoto.com/vectors/boy-man-character-mixer-making-music-and-having-fun-hands-up-night-vector-id958506984?k=20&m=958506984&s=612x612&w=0&h=UUMTOKi_gJR0J4U1Ebd93m8RtPyYWtJRVOAIk56WxxA="
              alt="foto dj1"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">DJ numero 3</h5>
            <p className="card-text">Cupidatat ullamco esse aliqua tempor Lorem.
              Consectetur esse ipsum sitim.Eiur mag velit cillum nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
