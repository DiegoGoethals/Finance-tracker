import "./Menu.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import localforage from "localforage";

function Menu() {

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        localforage.getItem("accounts").then(accounts => {
            setAccounts(accounts);
        });
    }, []);

    const closeMenu = () => {
        const menu = document.querySelector(".menu");
        const icon = document.querySelector(".icon");
        menu.style.transform = "translateX(-100%)";
        icon.style.transform = "translateX(0)";
    }

    return (
        <aside className="menu">
            <NavLink to={"/"} onClick={closeMenu}>Home</NavLink>
            <div className="accounts">
                <h3>Accounts</h3>
                {accounts && accounts.map((account) => (
                    <NavLink to={`/accounts/${account.name}`} key={account.name} onClick={closeMenu}>{account.name}</NavLink>
                ))}
            </div>
        </aside>
    );
}

export default Menu;