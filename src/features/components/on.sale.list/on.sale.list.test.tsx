import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { IProduct } from "../../../models/product";
import OnSaleList from "./on.sale.list";
import "@testing-library/jest-dom";

const mockProductList: IProduct[] = [
    {
        id: 2,
        name: "Painting",
        category: "Bedroom",
        overview: "",
        picture: "",
        on_sale: true,
        price: "156",
    },
];
describe("Given the on Sale Component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <OnSaleList products={mockProductList} />
                </Router>
            );
        });
        test("Then it should display article on sale", () => {
            const element = screen.getByText(/Painting/i);
            expect(element).toBeInTheDocument();
        });
    });
});
