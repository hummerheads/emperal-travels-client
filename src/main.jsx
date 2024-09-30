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
import Register from './components/register/Register';
import Contact from './components/contact/Contact';
import AllTouristSpots from './components/touristsSpots/AllTouristSpots';
import AddTouristSpot from './components/touristsSpots/AddTouristSpot';
import TouristSpot from './components/touristsSpots/touristSpot';
import Update from './components/touristsSpots/Update';
import { AuthProvider } from './components/authProvider/AuthProvider';
import MyList from './components/mylist/MyList';
import Profile from './components/profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
    element: <Home></Home>,
    
      },
      {
        path: "/login",
    element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/my-list",
        element: <MyList></MyList>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/all-tourist-spots",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch('https://emperal-travels-server.vercel.app/all-tourist-spots'),
      },
      {
        path: "/all-tourist-spots/:id",
        element: <TouristSpot></TouristSpot>,
        loader: () => fetch('https://emperal-travels-server.vercel.app/all-tourist-spots'),

      },
      {
        path: "/add-tourist-spot",
        element: <AddTouristSpot></AddTouristSpot>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://emperal-travels-server.vercel.app/all-tourist-spots/${params.id}`),

      },

    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </StrictMode>,
)
