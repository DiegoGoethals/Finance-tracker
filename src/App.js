import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import RootLayout from './layouts/RootLayout';
import Home from './Home';
import AccountDetails from './AccountDetails';
import MonthlyDetails from './MonthlyDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='accounts/:name/:month' element={<MonthlyDetails/>}/>
      <Route path='accounts/:name' element={<AccountDetails/>}/>
      <Route path='*' element={<h1>This page doesn't exist (yet) please go back to the home screen by clicking the header</h1>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
