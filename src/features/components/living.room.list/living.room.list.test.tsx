import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import LivingRoom from "./living.room.list";
import "@testing-library/jest-dom";
import { IProduct } from "../../../models/product";

const mockProductList: IProduct[] = [
    {
        id: 2,
        name: "Mirror",
        category: "Hallway",
        overview: "",
        picture: "",
        on_sale: true,
        price: "55",
    },
];

describe("Given living room list component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <LivingRoom products={mockProductList} />
                </Router>
            );
        });

        test("Then it should display the article name", () => {
            const element = screen.getByText(/Mirror/i);
            expect(element).toBeInTheDocument();
        });
    });
});
