import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import DetailPage from "./detail.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <DetailPage />
                </Router>
            );

            const element = screen.getByText(/Detail/);
            expect(element).toBeInTheDocument();
        });
    });
});
