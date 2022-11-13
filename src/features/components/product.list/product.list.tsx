import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

export function ProductList({ products }: { products: IProduct[] }) {
    return (
        <>
            <ul>
                {products.map((item: IProduct) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
