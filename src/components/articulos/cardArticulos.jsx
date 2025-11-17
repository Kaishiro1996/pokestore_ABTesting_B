import React from "react";
import "./cardArticulos.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function CardArticulos(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/producto/${props.nombre}`, {
      state: {
        categoria: props.categoria,
        precio: props.precio,
        imagen: props.imagen,
        nombre: props.nombre,
      },
    });
  };
  return (
    <div className="shadow-2 mx-3 w-25rem" onClick={handleClick}>
      <img
        src={props.imagen}
        alt={props.nombre}
        class="articulo-item"
        style={{ width: "80%", marginTop: "2rem" }}
      />
      <div>
        <h3 className="card-articulo-nombre">{props.nombre}</h3>
        <div>
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
        </div>
      </div>
      <hr className="mx-3 " />
      <div className="flex align-items-center justify-content-between px-3 my-3">
        <span className="card-articulo-precio">{props.precio}</span>
        <button className="bg-white text-black border-none border-circle p-3 shadow-2 hover:shadow-3 cursor-pointer"></button>
      </div>
    </div>
  );
}
