import BedRoomList from "../bedroom.list/bedroom.list";
import { useProducts } from "../hooks/use.products";

function Bedroom() {
    const { products } = useProducts();
    return (
        <>
            <main>
                <h2>Furniture for your Bedroom</h2>
                <BedRoomList products={products}></BedRoomList>
            </main>
        </>
    );
}
export default Bedroom;
