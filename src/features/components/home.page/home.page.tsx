import { useProducts } from "../hooks/use.products";
import { ProductList } from "../product.list/product.list";

function HomePage() {
    const { products } = useProducts();
    return (
        <>
            <main>
                <h2>
                    Find incredible furniture, all natural, crafted with great
                    care
                </h2>
                <ProductList products={products}></ProductList>
            </main>
        </>
    );
}
export default HomePage;
