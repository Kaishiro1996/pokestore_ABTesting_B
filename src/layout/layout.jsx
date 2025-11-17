import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
import MainPage from "../pages/main";
import Productos from "../pages/Productos/Productos";
import Sidebar from "../components/sidebar/sidebar";
import React, { useState, useEffect } from "react";
function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Guardar timestamp de impresión del sidebar/page
    window.__sidebar_impression_ts = Date.now();
  }, []);

  return (
    <div className="layout relative">
      <Header setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Overlay detrás del sidebar */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black-alpha-50"
          style={{ zIndex: 900 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
