import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/Nav.js";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js"
import Body from "./Components/Body.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";

const AppLayout = () => {
  return (
    <div className="main-container">
        <NavBar />
        <Outlet/>
      </div>
  )
};

const rout = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurant/:resid",
        element:<RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);


const root = ReactDOM.createRoot(document.querySelector("#hithere"));

root.render(<RouterProvider router={rout}/>);



