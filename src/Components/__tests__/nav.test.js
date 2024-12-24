import NavBar from "../Nav";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../config/reduxStore/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("navBar testing", () => {
  it("should check if  nav have login in it", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "login" });

    expect(loginButton).toBeInTheDocument();
  });

  it("should check cart is rendered with zero", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );

    const cartItem = screen.getByText("0");

    expect(cartItem).toBeInTheDocument();
  });

  it("should check default button and then show iron man", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"login"});
    fireEvent.click(loginButton);
    const loginButtonAfterClick = screen.getByRole("button",{name:"logout"})
    expect(loginButtonAfterClick).toBeInTheDocument();
  });
});
