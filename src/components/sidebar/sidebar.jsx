import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import { MdOutlineMenu } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import gaTracking from "../../Helpers/gaTracking";
export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  // Googla Analytics Tracking
  const gaTrackingParams = {
    event: "",

    payload: {},
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen transition-linear	transition-duration-300 flex flex-column 
       overflow-hidden`}
      style={{
        zIndex: 1000,
        backgroundColor: "white",
        width: isOpen ? "16rem" : "0rem",
      }}
    >
      <div
        className="w-full flex justify-content-around gap-5 align-items-center"
        style={{ backgroundColor: "black" }}
      >
        <h3 style={{ color: "white" }}>Bienvenido</h3>
        <button
          className="bg-transparent border-none  mt-3 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoClose color="#F9FAFA" size={30} />
        </button>
      </div>
      {/* Contenido del sidebar */}
      <ul
        className="list-none p-0 mt-2 w-full  text-left"
        style={{ color: "black" }}
      >
        <li
          className="p-0 my-2 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/");
          }}
        >
          Articulos Destacados{" "}
        </li>
        <li className="p-0 my-2 mx-2">Promociones </li>
        <li className="p-0 my-2 mx-2">Novedades </li>
      </ul>

      <div
        className="w-11 align-self-center flex border-round-lg mx-1 pl-1 "
        style={{ backgroundColor: "#bb00ff" }}
      >
        <p className="m-1 text-left" style={{ color: "white" }}>
          Buscar y Comprar por Familia
        </p>
      </div>
      <ul
        className="list-none p-0 mt-2 w-full  text-left"
        style={{ color: "black" }}
      >
        <li
          className="p-0 my-1 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/billeteras");
            gaTrackingParams.event = "click_sidebar";
            gaTrackingParams.payload = {
              linkclicked: "billeteras",
            };
            gaTracking(gaTrackingParams);

            window.mdq = window.mdq || [];
            window.mdq.push(["track", "click_sidebar"]);
          }}
        >
          BILLETERAS{" "}
        </li>
        <li
          className="p-0 my-1 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/bolsos");
            gaTrackingParams.event = "click_sidebar";
            gaTrackingParams.payload = {
              linkclicked: "bolsos",
            };
            gaTracking(gaTrackingParams);
            window.mdq = window.mdq || [];
            window.mdq.push(["track", "click_sidebar"]);
          }}
        >
          BOLSOS{" "}
        </li>
        <li
          className="p-0 my-1 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/figuras");
            gaTrackingParams.event = "click_sidebar";
            gaTrackingParams.payload = {
              linkclicked: "Figuras",
            };
            gaTracking(gaTrackingParams);
            window.mdq = window.mdq || [];
            window.mdq.push(["track", "click_sidebar"]);
          }}
        >
          FIGURAS{" "}
        </li>
        <li
          className="p-0 my-1 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/golosinas");
            gaTrackingParams.event = "click_sidebar";
            gaTrackingParams.payload = {
              linkclicked: "Golosinas",
            };
            gaTracking(gaTrackingParams);
            window.mdq = window.mdq || [];
            window.mdq.push(["track", "click_sidebar"]);
          }}
        >
          GOLOSINAS{" "}
        </li>
        <li
          className="p-0 my-1 mx-2"
          onClick={() => {
            setIsOpen(false);
            navigate("/tcg");
            gaTrackingParams.event = "click_sidebar";
            gaTrackingParams.payload = {
              linkclicked: "billeteras",
            };
            gaTracking(gaTrackingParams);
            window.mdq = window.mdq || [];
            window.mdq.push(["track", "click_sidebar"]);
          }}
        >
          Tcg POKEMON{" "}
        </li>
      </ul>
      <div
        className="w-11 align-self-center flex border-round-lg mx-1 pl-1"
        style={{ backgroundColor: "#bb00ff" }}
      >
        <p className="m-1 text-left" style={{ color: "white" }}>
          Tambien nos puede encontrar en
        </p>
      </div>
    </div>
  );
}
