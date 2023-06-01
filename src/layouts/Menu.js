import "./Menu.css";
import { NavLink } from "react-router-dom";

function Menu() {
    return (
        <aside className="menu">
            <NavLink to={"/"}>Home</NavLink>
        </aside>
    );
}

export default Menu;