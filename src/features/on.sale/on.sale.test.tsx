import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import OnSale from "./on.sale";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <OnSale />
                </Router>
            );

            const element = screen.getByText(/onSale/);
            expect(element).toBeInTheDocument();
        });
    });
});
