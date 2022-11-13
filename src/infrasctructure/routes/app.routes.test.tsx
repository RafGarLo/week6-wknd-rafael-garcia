import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../components/store/store";

describe("Given AppRoutes component", () => {
    describe("When we render the component And the route is home", () => {
        beforeEach(() => {
            render(
                <Router
                    initialEntries={[
                        "/",
                        "/home",
                        "living-room",
                        "bedroom",
                        "detailPage",
                    ]}
                    initialIndex={1}
                >
                    <Provider store={appStore}>
                        <AppRoutes />
                    </Provider>
                </Router>
            );
        });
        test("Then it should display the Home", () => {
            const element = screen.getByText(/crafted/i);
            expect(element).toBeInTheDocument();
        });
    });
});
