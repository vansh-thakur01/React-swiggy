import React, { useState, useEffect, Suspense, useContext } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./Components/Nav.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import Body from "./Components/Body.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import userContext from "./config/userContext.js";
import { Provider } from "react-redux";
import store from "./config/reduxStore/store.js";
import Cart from "./Components/Cart.js";
// import Grocery from "./Components/Grocery.js";

const Grocery = React.lazy(() =>
  import("./Components/Grocery.js").then((module) => ({
    default: module.Grocery,
  }))
);
// console.dir(Grocery);

const AppLayout = () => {
  const { loginUser } = useContext(userContext);
  const [userName, setUserName] = useState(loginUser);
  useEffect(() => {
    const data = {
      user: "Iron Man",
    };
    console.log(userName, "(form app before the hook gone in hook list )");
    setUserName(data.user);
    console.log(userName,"(from app after the hook gone in hook list)");
  }, []);

  const arr = [1,2];

  arr.length = 0;
  console.log(arr);

  return (
    <Provider store={store}>
      <userContext.Provider value={{ loginUser: userName }}>
        <div className="font-sans text-neutral-900">
          <NavBar />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const unsub = store.subscribe(()=>{console.log("7244trsrsdyje 65e 65eue55")});

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
        path:"/cart",
        element:<Cart/>,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <h1>
              I am suspended (because of lazy component written down. React see
              this lazy person and suspend me too) u can not see me until this
              component promise is not settled
            </h1>
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
