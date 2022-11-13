import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import Bedroom from "./bedroom.page";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/components/store/store";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <Bedroom />
                    </Provider>
                </Router>
            );

            const element = screen.getByText(/bedroom/i);
            expect(element).toBeInTheDocument();
        });
    });
});
