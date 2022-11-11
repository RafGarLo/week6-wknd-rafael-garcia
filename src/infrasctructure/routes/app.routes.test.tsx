import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";

describe("Given AppRoutes component", () => {
    describe("When we render the component And the route is home", () => {
        beforeEach(() => {
            // eslint-disable-next-line testing-library/no-render-in-setup
            render(
                <Router
                    initialEntries={[
                        "/",
                        "/homePage",
                        "living-room",
                        "bedroom",
                        "detailPage",
                    ]}
                    initialIndex={0}
                >
                    <AppRoutes />
                </Router>
            );
        });
        test("Then it should display the Home", () => {
            const element = screen.getByText(/HomePage/i);
            expect(element).toBeInTheDocument();
        });
    });
});
