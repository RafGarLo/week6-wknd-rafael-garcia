import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Given App component", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            <Router>
                <App />
            </Router>
        );
    });
    test("renders Home Elements", () => {
        const linkElement = screen.getByText(/Home/i);
        expect(linkElement).toBeInTheDocument();
    });
});
