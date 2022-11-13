import { useProducts } from "../hooks/use.products";
import OnSaleList from "../on.sale.list/on.sale.list";

function OnSalePage() {
    const { products } = useProducts();
    return (
        <>
            <main>
                <h2>These are our pieces on sale</h2>
                <OnSaleList products={products}></OnSaleList>
            </main>
        </>
    );
}
export default OnSalePage;
