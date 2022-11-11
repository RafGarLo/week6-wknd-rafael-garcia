import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import LivingRoom from "./living.room";
import "@testing-library/jest-dom";
describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Router>
                    <LivingRoom />
                </Router>
            );
        });

        test("Then it should display the title", () => {
            const element = screen.getByText(/Room/i);
            expect(element).toBeInTheDocument();
        });
    });
});
