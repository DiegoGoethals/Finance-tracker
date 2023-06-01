import "./Menu.css";

function Menu() {

    const closeMenu = () => {
        const menu = document.querySelector(".menu");
        const icon = document.querySelector(".icon");
        menu.style.opacity = "0";
        menu.style.zIndex = "-1";
        icon.style.opacity = "1";
    }

    return (
        <aside className="menu">
            <button onClick={closeMenu}>x</button>
            <p>Menu</p>
        </aside>
    );
}

export default Menu;