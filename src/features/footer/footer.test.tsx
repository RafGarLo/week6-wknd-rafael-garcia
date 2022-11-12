import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
import "@testing-library/jest-dom";
describe("Given Footer component", () => {
    beforeEach(() => {
        render(<Footer />);
    });
    test("Then it should display Couch", () => {
        const element = screen.getByText(/Couch/i);
        expect(element).toBeInTheDocument();
    });
});
