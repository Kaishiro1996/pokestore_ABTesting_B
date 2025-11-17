import "../../styles/stylesGeneral.css";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/KGbqJFjVa0jvpLY.png";
import { MdOutlineMenu } from "react-icons/md";

import { useState } from "react";

import SearchBar from "../../components/searchbar/searchbar";

export default function Header({ setIsOpen }) {
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);
  return (
    <header class="header">
      <div className="header-container">
        <div class="hd-align z-5">
          <a href="/">
            <img src={logo} alt="Logo" height={58} width={70} />
          </a>
          <div
            className="bg-transparent border-none z-5"
            onClick={() => setIsOpen(true)}
          >
            <MdOutlineMenu color="#ffff00" size={40} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
