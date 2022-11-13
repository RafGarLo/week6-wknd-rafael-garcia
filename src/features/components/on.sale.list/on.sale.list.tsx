import React from "react";
import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function OnSaleList({ products }: { products: IProduct[] }) {
    const onSaleProducts = products.filter((item) => item.on_sale === true);

    return (
        <>
            {onSaleProducts.map((item: IProduct) => (
                <li key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </li>
            ))}
        </>
    );
}
export default OnSaleList;
