import { render ,screen} from "@testing-library/react"
import RestCart from "../RestCart"
import resdata from "./mockData/resCardData.json"
import "@testing-library/jest-dom"
import { withPromotedLabel } from "../RestCart"

it("should check the resturant card",()=>{
    render(<RestCart restdata={resdata}/>)

    const resName = screen.getByText("Apni Rasoi Family Dhaba");

    expect(resName).toBeInTheDocument();

})

it("should check the modifyed rescart",()=>{
    const ResWithLabel = withPromotedLabel(RestCart);
    render(<ResWithLabel restdata={resdata} />);
    const label = screen.getByText("Veg");
    expect(label).toBeInTheDocument();
})