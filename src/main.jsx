import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';
import Root from './components/root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/login",
    element: <Login></Login>
      },
      {
        path: "/register",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Home></Home>
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
