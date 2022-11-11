import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import OnSale from "./on.sale";
import "@testing-library/jest-dom";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <OnSale />
                </Router>
            );

            const element = screen.getByText(/OnSale/i);
            expect(element).toBeInTheDocument();
        });
    });
});
