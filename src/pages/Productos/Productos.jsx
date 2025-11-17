import React from "react";
import gengarImage from "../../assets/ckssLLdHuaNokC2.jpg";
import productos from "../../assets/productos";
import CardArticulos from "../../components/articulos/cardArticulos";
export default function Productos({ categoria }) {
  const billeteras = productos[categoria];

  return (
    <div className="container">
      <div className="flex align-items-center flex-column">
        <img
          src={gengarImage}
          alt="Gengar"
          style={{ width: "75%", marginTop: "1rem" }}
        />
      </div>
      <div className="flex flex-wrap justify-content-center gap-4 p-4">
        {billeteras.map((item, index) => (
          <CardArticulos key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
