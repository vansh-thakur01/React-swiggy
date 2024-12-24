import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contactUs page testing", () => {
  test("testing the contact", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("testing for button box",()=>{
    render(<Contact/>);

    const button = screen.getByText("Click");

    expect(button).toBeInTheDocument();
  })

  test("testing for text",()=>{
    render(<Contact/>);

    const inputBox = screen.getAllByRole("textbox");

    expect(inputBox.length).toBe(2);
  })
});
