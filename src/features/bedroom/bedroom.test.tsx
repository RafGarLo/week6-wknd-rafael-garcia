import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Bedroom from "./bedroom";
import "@testing-library/jest-dom";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Bedroom />
                </Router>
            );

            const element = screen.getByText(/bedroom/i);
            expect(element).toBeInTheDocument();
        });
    });
});
