import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/Nav.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import Body from "./Components/Body.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
// import Grocery from "./Components/Grocery.js";

const Grocery = React.lazy(() => import("./Components/Grocery.js").then(module => ({ default: module.Grocery })));

// console.dir(Grocery);

const AppLayout = () => {
  return (
    <div className="font-sans text-neutral-900">
      <NavBar />
      <Outlet />
    </div>
  );
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <h1>I am suspended (because of lazy component written down. React see this lazy person and suspend me too) u can not see me until this component promise is not settled</h1>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#hithere"));

root.render(<RouterProvider router={rout} />);
