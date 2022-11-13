import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import { appStore } from "../../../infrasctructure/components/store/store";
import { Provider } from "react-redux";
import React from "react";
import OnSalePage from "./on.sale.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <OnSalePage />
                    </Provider>
                </Router>
            );

            const element = screen.getByText(/sale/i);
            expect(element).toBeInTheDocument();
        });
    });
});
