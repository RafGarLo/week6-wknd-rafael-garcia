import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function LivingRoomList({ products }: { products: IProduct[] }) {
    const livingRoomProducts = products.filter(
        (item) => item.category === "living room"
    );

    return (
        <>
            <h2>Furniture for your Living Room</h2>
            {livingRoomProducts.map((item: IProduct) => (
                <li key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </li>
            ))}
        </>
    );
}
export default LivingRoomList;
