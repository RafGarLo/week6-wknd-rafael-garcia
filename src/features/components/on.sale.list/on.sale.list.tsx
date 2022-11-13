import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function onSaleList({ products }: { products: IProduct[] }) {
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
export default onSaleList;
