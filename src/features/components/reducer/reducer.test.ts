import { IProduct } from "../../../models/product";
import { loadActionCreator } from "./action.creators";
import { actionTypes } from "./action.types";
import { productReducer } from "./reducer";

const mockProduct = {
    id: 3,
    name: "bed",
    category: "bedroom",
    overview: "",
    picture: "",
    on_sale: true,
    price: "350",
};
let action: { type: string; payload: unknown };
let state: Array<IProduct>;

describe("Given a state and an action", () => {
    describe("When ActionTypes is load", () => {
        test("Then it should return payload as a new state", () => {
            const newState = productReducer(
                [],
                loadActionCreator([mockProduct])
            );
            expect(newState).toEqual([mockProduct]);
        });
    });
    describe("When the action is not load", () => {
        test("Then it should return a new instance of state", () => {
            const newState = productReducer([mockProduct], {
                type: "",
                payload: [],
            });
            expect(newState).toEqual([mockProduct]);
        });
    });
    describe("When the action is add", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.add,
                payload: mockProduct,
            };
            state = [];
        });
        test("Then the mockItem should be added", () => {
            const result = productReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockProduct, title: "Update product" },
            };
            state = [mockProduct];
        });
        test("Then the returned state should include the action payload", () => {
            const result = productReducer(state, action);
            expect(result).toContainEqual(action.payload);
        });
    });
    describe("When the action is update and the id is not valid", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.update,
                payload: { ...mockProduct, id: 2, title: "Update product" },
            };
            state = [mockProduct];
        });
        test("Then the returned state should not change the original state", () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });
    describe("When the action is delete", () => {
        beforeEach(() => {
            action = {
                type: actionTypes.delete,
                payload: { ...mockProduct, id: 3 },
            };
            state = [mockProduct];
        });
        test("Then the returned state should be deleted item", () => {
            const result = productReducer(state, action);
            expect(result).toEqual([]);
        });
    });
    describe("When the action is any other", () => {
        beforeEach(() => {
            action = {
                type: "",
                payload: null,
            };
            state = [mockProduct];
        });
        test("Then the returned state should not change", () => {
            const result = productReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
