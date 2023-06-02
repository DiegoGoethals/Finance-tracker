import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {

    const closeMenu = () => {
        const menu = document.querySelector(".menu");
        const icon = document.querySelector(".icon");
        menu.style.transform = "translateX(-100%)";
        icon.style.transform = "translateX(0)";
      }

    return (
        <aside className="menu">
            <NavLink to={"/"} onClick={closeMenu}>Home</NavLink>
        </aside>
    );
}

export default Menu;