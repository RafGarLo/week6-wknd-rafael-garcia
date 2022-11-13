import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "./infrasctructure/components/store/store";

describe("Given App component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Provider store={appStore}>
                    {" "}
                    <App />
                </Provider>
            </Router>
        );
    });
    test("renders Home Elements", () => {
        const linkElement = screen.getByText(/Rafael/i);
        expect(linkElement).toBeInTheDocument();
    });
});
