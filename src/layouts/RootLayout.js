import "./Root.css";
import { Outlet } from 'react-router-dom';
import Menu from './Menu.js';

function RootLayout() {

  const toggleMenu = () => {
    const menu = document.querySelector(".menu");
    const icon = document.querySelector(".icon");
    menu.style.opacity = "1";
    menu.style.zIndex = "1";
    icon.style.opacity = "0";
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