import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function BedRoomList({ products }: { products: IProduct[] }) {
    const bedroomProducts = products.filter(
        (item) => item.category === "bedroom"
    );
    return (
        <>
            {bedroomProducts.map((item: IProduct) => (
                <li key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </li>
            ))}
        </>
    );
}
export default BedRoomList;
