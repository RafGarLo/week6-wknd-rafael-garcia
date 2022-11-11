import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import LivingRoom from "./living.room";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <LivingRoom />
                </Router>
            );

            const element = screen.getByText(/Room/);
            expect(element).toBeInTheDocument();
        });
    });
});
