import { useProducts } from "../hooks/use.products";
import LivingRoomList from "../living.room.list/living.room.list";

function LivingRoomPage() {
    const { products } = useProducts();
    return (
        <>
            <LivingRoomList products={products}></LivingRoomList>
        </>
    );
}
export default LivingRoomPage;
