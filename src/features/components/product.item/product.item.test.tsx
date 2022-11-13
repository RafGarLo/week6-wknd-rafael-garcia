import { render } from "@testing-library/react";
import { IProduct } from "../../../models/product";
import { ProductItem } from "./product.item";

describe("Given the product item component", () => {
    describe("When we render the component", () => {
        const mockProduct: IProduct = {
            id: 5,
            name: "chair",
            category: "living_room",
            overview: "",
            picture: "",
            on_sale: true,
            price: "200",
        };
        test("when", () => {
            render(<ProductItem item={mockProduct} />);
        });
    });
});
