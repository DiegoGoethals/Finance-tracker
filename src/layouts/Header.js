import "./Header.css";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <header>
                <h1>Finance Tracker</h1>
                <NavLink to="/"><p>Home</p></NavLink>
            </header>
        </div>
    );
}

export default Header;