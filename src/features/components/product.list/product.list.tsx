import { useProducts } from "../hooks/use.products";
import { ProductItem } from "../product.item/product.item";

export function ProductList() {
    const { products } = useProducts();
    return (
        <>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <ProductItem item={item}></ProductItem>
                    </li>
                ))}
            </ul>
        </>
    );
}
