import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import DetailPage from "./detail.page";
import "@testing-library/jest-dom";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <DetailPage />
                </Router>
            );

            const element = screen.getByText(/Detail/i);
            expect(element).toBeInTheDocument();
        });
    });
});
