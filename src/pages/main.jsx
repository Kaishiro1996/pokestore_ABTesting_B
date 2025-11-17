import "../styles/stylesGeneral.css";
import { useNavigate } from "react-router-dom";
import gengarImage from "../assets/ckssLLdHuaNokC2.jpg";
import storeImage from "../assets/14.jpeg";
import { Image } from "primereact/image";
import Card from "../components/articulos/cardArticulos.jsx";
import CardCategorias from "../components/cardCategorias/cardCategorias.jsx";
import gaTracking from "../Helpers/gaTracking.js";
import a from "../assets/4226_4444.jpg";
import b from "../assets/4313_4646.jpg";
import c from "../assets/4340_4675.jpg";
import d from "../assets/6409_8041.jpg";
import e from "../assets/21.jpg";
import f from "../assets/6.jpg";
import g from "../assets/2.jpg";
import h from "../assets/15.jpg";
import i from "../assets/17.jpg";

function MainPage() {
  // Googla Analytics Tracking
  const gaTrackingParams = {
    event: "",
    payload: {},
  };

  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex align-items-center flex-column">
        <Image src={gengarImage} alt="Gengar" width="75%" className="mt-1" />

        <Image src={storeImage} alt="store" width="60%" className="mt-1" />
      </div>
      <h1 class="head-m">Articulos de Temporada!</h1>
      <div>
        <div className="grid lg:grid-cols-2 articulos-grid gap-5">
          <Card
            imagen={a}
            nombre="FIGURA GENGAR CON POKEBOLA POKEMON"
            precio="¢18.900,00"
          />
          <Card
            imagen={b}
            nombre=" CONSOLA PLAYSTATION 5 SLIM DIGITAL PRO SIN JUEGO 2TB"
            precio="¢73.900,00"
          />

          <Card
            imagen={c}
            nombre="CONTROL PLAYSTATION 5 30TH LIMITED EDITION"
            precio="¢74.900,00"
          />

          <Card
            imagen={d}
            nombre="CONTROL PLAYSTATION ORIGINAL GOD OF WAR 20TH LIMITED EDITION ANNIVERSARY"
            precio="¢73.900,00"
          />
        </div>
        <div className="m-2">
          <h1 className="head-m my-6 px-3 ">Explora Nuestras Categorias</h1>
        </div>
        <div class="grid  lg:grid-cols-3 articulos-grid gap-3 px-3">
          <div
            onClick={() => {
              gaTrackingParams.event = "click_main";
              gaTrackingParams.payload = {
                linkclicked: "billeteras",
              };
              gaTracking(gaTrackingParams);
              navigate("/billeteras");
            }}
          >
            <CardCategorias imagen={e} categoria="Biletera" />
          </div>
          <div
            onClick={() => {
              gaTrackingParams.event = "click_main";

              gaTrackingParams.event = "click_main";
              gaTrackingParams.payload = {
                linkclicked: "bolsos",
              };
              gaTracking(gaTrackingParams);
              navigate("/bolsos");
            }}
          >
            <CardCategorias
              imagen={f}
              categoria="Bulto/maletin/bolso/cartera"
            />
          </div>
          <div
            onClick={() => {
              gaTrackingParams.event = "click_main";

              gaTrackingParams.event = "click_main";
              gaTrackingParams.payload = {
                linkclicked: "figuras",
              };
              gaTracking(gaTrackingParams);
              navigate("/figuras");
            }}
          >
            <CardCategorias imagen={g} categoria="Figuras" />
          </div>
          <div
            onClick={() => {
              gaTrackingParams.event = "click_main";

              gaTrackingParams.payload = {
                linkclicked: "golosinas",
              };
              gaTracking(gaTrackingParams);
              navigate("/golosinas");
            }}
          >
            <CardCategorias imagen={h} categoria="Golosinas" />
          </div>
          <div
            onClick={() => {
              gaTrackingParams.event = "click_main";
              gaTrackingParams.payload = {
                linkclicked: "tcg",
              };
              gaTracking(gaTrackingParams);
              navigate("/tcg");
            }}
          >
            <CardCategorias imagen={i} categoria="Tcg pokemon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
