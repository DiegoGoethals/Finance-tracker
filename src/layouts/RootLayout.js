import "./Root.css";
import { Outlet } from 'react-router-dom';
import Menu from './Menu.js';

function RootLayout() {

  return (
    <div className = "root">
      <p id="title">Finance Tracker</p>
      <Menu/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayout;