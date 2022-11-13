import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/components/store/store";
import LivingRoomPage from "./living.room.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        test("Then it should display the title", () => {
            render(
                <Router>
                    <Provider store={appStore}>
                        <LivingRoomPage />
                    </Provider>
                </Router>
            );

            const element = screen.getByText(/living/i);
            expect(element).toBeInTheDocument();
        });
    });
});
