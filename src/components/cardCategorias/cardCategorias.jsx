import React from "react";
import { Image } from "primereact/image";
export default function cardCategorias(props) {
  return (
    <div
      className="shadow-2 mx-3 w-18rem h-20rem "
      style={{ backgroundColor: "#000" }}
    >
      <Image
        src={props.imagen}
        alt={props.categoria}
        width="100%"
        height="85%"
      />

      <p className="mb-2 pb-2 y-color">{props.categoria}</p>
    </div>
  );
}
