import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter as Router } from "react-router-dom";
import { IProduct } from "../../../models/product";

import { ProductList } from "./product.list";

const mockProductList: IProduct[] = [
    {
        id: 2,
        name: "table",
        category: "living_room",
        overview: "",
        picture: "",
        on_sale: true,
        price: "450",
    },
];
describe("Given Product List component", () => {
    test("Then it should display product name", () => {
        render(
            <Router>
                <ProductList products={mockProductList}></ProductList>
            </Router>
        );
        const element = screen.getByText(/table/i);
        expect(element).toBeInTheDocument();
    });
});
