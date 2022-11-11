import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Home from "../living.room/living.room";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Home />
                </Router>
            );

            const element = screen.getByText(/Home/);
            expect(element).toBeInTheDocument();
        });
    });
});
