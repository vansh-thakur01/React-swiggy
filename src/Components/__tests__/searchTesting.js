import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Mock_data from "./mockData/Mock_data_of_fullres.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ json: () => Promise.resolve(Mock_data) });
});

it("should test the search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchButton = screen.getByRole("button",{name :"Button"});

  const inputBox = screen.getByTestId("searchBox");

  fireEvent.change(inputBox,{target:{value:"House"}});

  fireEvent.click(searchButton);

  const rescart = screen.getAllByTestId("rescart");

  expect(rescart.length).toBe(2);

  
});
