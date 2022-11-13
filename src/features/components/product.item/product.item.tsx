import { IProduct } from "../../../models/product";

export function ProductItem({ item }: { item: IProduct }) {
    return (
        <>
            <p>{item.name}</p>
            <br></br>
            <img src={item.picture} alt={`${item.name}`}></img>
            <br></br>
            <p>Original Price{item.price}</p>
            <br></br>
            <p>Sale Price{item.reduced_price}</p>
        </>
    );
}
