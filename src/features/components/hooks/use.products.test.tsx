import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../../infrasctructure/components/store/store";
import { IProduct } from "../../../models/product";
import { ProductRepository } from "../reducer/services/product.repository";
import { useProducts } from "./use.products";
jest.mock("../reducer/services/product.repository");

const mockProduct = {
    id: 1,
    name: "name",
    category: "category",
    overview: "category",
    picture: "category",
    on_sale: true,
    price: "1",
    reduced_price: "1",
};
const newMockProduct = {
    id: 1,
    name: "name",
    category: "category",
    overview: "category",
    picture: "category",
    on_sale: true,
    price: "1",
    reduced_price: "1",
};
describe("Given hooks", () => {
    let result: {
        current: {
            products: Array<IProduct>;
            handleAdd: (newProduct: IProduct) => void;
            handleDelete: (product: IProduct) => void;
            handleUpdate: (updateProduct: IProduct) => void;
        };
    };
    beforeEach(() => {
        ProductRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockProduct]);
        ProductRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(newMockProduct);
        ProductRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(mockProduct);
        ProductRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(newMockProduct);
        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );

        ({ result } = renderHook(() => useProducts(), { wrapper }));
    });
    test("it should first return mockProduct", async () => {
        await waitFor(() => {
            expect(result.current.products).toEqual([mockProduct]);
        });
    });
    test("when we use handleAdd, newMockProduct should be added", async () => {
        await waitFor(() => {
            result.current.handleAdd(newMockProduct);
            expect(result.current.products.at(-1)).toEqual(newMockProduct);
        });
    });
    test("it should also update the product once handleUpdate has been called", async () => {
        await waitFor(() => {
            result.current.handleUpdate(newMockProduct);
            expect(result.current.products.at(-1)).toEqual(newMockProduct);
        });
        await waitFor(() => {
            expect(ProductRepository.prototype.update).toHaveBeenCalled();
        });
    });
    test("When handleDelete is called, the response is ok, handleDelete should be called", async () => {
        await waitFor(() => {
            result.current.handleDelete(newMockProduct);
            expect(ProductRepository.prototype.delete).toHaveBeenCalled();
        });
    });
});
