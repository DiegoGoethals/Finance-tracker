import { Outlet } from 'react-router-dom';
import Header from './Header.js';

function RootLayout() {

  return (
    <div className = "root">
      <div className='header'>
        <Header/>
      </div>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayout;