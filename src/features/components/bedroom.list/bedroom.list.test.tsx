import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";

import "@testing-library/jest-dom";
import { IProduct } from "../../../models/product";
import BedRoomList from "./bedroom.list";

const mockProductList: IProduct[] = [
    {
        id: 2,
        name: "Armchair",
        category: "Living_room",
        overview: "",
        picture: "",
        on_sale: true,
        price: "55",
    },
];

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <BedRoomList products={mockProductList} />
                </Router>
            );
        });

        test("Then it should display the title", () => {
            const element = screen.getByText(/armchair/i);
            expect(element).toBeInTheDocument();
        });
    });
});
