import { ProductRepository } from "./product.repository";
import "@testing-library/jest-dom";

const mockProduct = {
    id: 5,
    name: "sofa",
    category: "living-room",
    overview: "",
    picture: "",
    on_sale: true,
    price: "370",
};

describe("Given product api Service", () => {
    describe("When we instantiate it", () => {
        let service: ProductRepository;
        beforeEach(() => {
            service = new ProductRepository();
        });
        test("Then if i use service.error(), it should return an error", () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });

        test(`Then if I use service.getProduct() 
            it should return a Promise of an Array of Task`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test("Then if I use getAll() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.getAll();
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
        test(`Then if I use service.createProduct()
                it should return a Promise of the created product`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockProduct),
            });
            const result = await service.create(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockProduct);
        });
        test("Then if I use create() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.create(mockProduct);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
        test("Then if I use service deleteProduct, it should return an empty array of product", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue({}),
            });
            const result = await service.delete(mockProduct.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBeUndefined();
        });
        test("then if I use service update product it should return promise of array of products", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([mockProduct]),
            });
            const result = await service.update(mockProduct);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([mockProduct]);
        });
        test("Then if I use update() and the response is incorrect, there should be an error", async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
                status: 400,
                statusText: "error",
            });
            const expectedResult = await service.update(mockProduct);
            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(expectedResult).toBe(result.toString());
        });
    });
});
