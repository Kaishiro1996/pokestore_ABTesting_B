import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import "../../styles/stylesGeneral.css";

function SearchBar() {
  return (
    <div className="flex align-items-center justify-content-center w-full my-3 lg:-mt-6">
      <button
        id="nav_text"
        class="btn btn-m dropdown-toggle y-bg"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Todos
      </button>
      <input
        class="p-inputtext"
        type="text"
        id="ed"
        name="ed"
        aria-label="¿Qué deseas comprar?"
        autocomplete="off"
      ></input>
      <Button label="Buscar" className="y-bg btn-b btn-m" />
    </div>
  );
}
export default SearchBar;
