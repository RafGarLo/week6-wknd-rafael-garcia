import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function LivingRoomList({ products }: { products: IProduct[] }) {
    return (
        <>
            <h2>Furniture for your Living Room</h2>
            {products.map((item: IProduct) => (
                <li key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </li>
            ))}
        </>
    );
}
export default LivingRoomList;
