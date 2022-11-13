import { IProduct } from "../../../models/product";
import { ProductItem } from "../product.item/product.item";

function BedRoomList({ products }: { products: IProduct[] }) {
    return (
        <>
            {products.map((item: IProduct) => (
                <li key={item.id}>
                    <ProductItem item={item}></ProductItem>
                </li>
            ))}
        </>
    );
}
export default BedRoomList;
