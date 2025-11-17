import React, { useState } from "react";
import { BreadCrumb } from "primereact/breadcrumb";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FaStar } from "react-icons/fa";
import { Dialog } from "primereact/dialog";
import gaTracking from "../../Helpers/gaTracking";
import { useLocation, useParams } from "react-router-dom";
export default function Producto() {
  const { nombre } = useParams();
  const location = useLocation();
  const producto = location.state;
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState("center");
  const footerContent = (
    <div className="flex justify-content-center">
      <Button label="Cerrar" onClick={() => setVisible(false)} />
    </div>
  );

  const show = (position) => {
    setPosition(position);
    setVisible(true);
  };

  const items = [
    { label: "Inicio", url: `/` },
    { label: producto.nombre, url: `/producto/${producto.nombre}` },
  ];

  const gaTrackingParams = {
    event: "",
    payload: {},
  };

  if (!producto)
    return (
      <div>
        <h1>producto no encontrado</h1>
      </div>
    );
  return (
    <div>
      <BreadCrumb model={items} />
      <Card className="mx-2">
        <Image src={producto.imagen} alt={producto.nombre} width="350" />

        <h2>{producto.nombre}</h2>
        <div>
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
          <FaStar size={30} color="#bebebeff" />
        </div>
        <h2>{producto.precio}</h2>
        <Button
          onClick={() => {
            gaTrackingParams.event = "compra_producto";
            gaTrackingParams.payload = {
              nombre_producto: producto.nombre,
            };
            gaTracking(gaTrackingParams);
            show("top");
          }}
          label="Comprar"
          className="y-bg btn-b btn-m w-5"
        />
      </Card>

      <Dialog
        header="Compra Realizada"
        visible={visible}
        position={position}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        footer={footerContent}
        draggable={false}
        resizable={false}
      >
        <p className="m-0">
          Compra realizada con exito, gracias por comprar en Poke Store
        </p>
      </Dialog>
    </div>
  );
}
