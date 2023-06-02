import "./Root.css";
import { Outlet } from 'react-router-dom';
import Menu from './Menu.js';

function RootLayout() {

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    if (menu.style.transform === "translateX(0px)") {
      closeMenu();
    } else {
      openMenu();
    }
  }

  const closeMenu = () => {
    const menu = document.querySelector(".menu");
    const icon = document.querySelector(".icon");
    menu.style.transform = "translateX(-100%)";
    icon.style.transform = "translateX(0)";
  }

  const openMenu = () => {
    const menu = document.querySelector(".menu");
    const icon = document.querySelector(".icon");
    menu.style.transform = "translateX(0)";
    icon.style.transform = "translateX(175%)";
  }

  return (
    <div className = "root">
      <p id="title">Finance Tracker</p>
      <i className="fa-solid fa-bars icon" onClick={toggleMenu}></i>
      <Menu/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayout;