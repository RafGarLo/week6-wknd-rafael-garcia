import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Bedroom from "./bedroom";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Bedroom />
                </Router>
            );

            const element = screen.getByText(/bedroom/);
            expect(element).toBeInTheDocument();
        });
    });
});
