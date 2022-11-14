import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { IProduct } from "../../../models/product";
import LivingRoomList from "./living.room.list";

const mockProductList: IProduct[] = [
    {
        id: 2,
        name: "Mirror",
        category: "living room",
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
                    <LivingRoomList products={mockProductList} />
                </Router>
            );
        });

        test("Then it should display the article name", () => {
            const element = screen.getByText(/Mirror/i);
            expect(element).toBeInTheDocument();
        });
    });
});
