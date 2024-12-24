import RestaurantMenu from "../RestaurantMenu";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../config/reduxStore/store";
import { act } from "react";
import Mock_menu_list from "./mockData/Mock_menu_list.json";
import NavBar from "../Nav";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(Mock_menu_list) })
);

test("is changing the cart number", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <NavBar />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const addButton = screen.getAllByText("ADD");
  fireEvent.click(addButton[0]);
  const addByPlusText = screen.getAllByTestId("plusButton");
  fireEvent.click(addByPlusText[0]);
  fireEvent.click(addByPlusText[0]);
  fireEvent.click(addByPlusText[0]);
  fireEvent.click(addByPlusText[0]);
 
  const cartNumber = screen.getByTestId("cartItems");
  expect(cartNumber).toHaveTextContent(5);
  console.log(cartNumber); 
});
