import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import {Layout} from "./Layout"
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/home",
          element:<HomePage/>
        }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;


