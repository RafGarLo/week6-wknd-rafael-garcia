import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../infrasctructure/components/store/store";
import { ProductRepository } from "../reducer/services/product.repository";
import * as ac from "../reducer/action.creators";
import { IProduct } from "../../../models/product";

export const useProducts = () => {
    const products = useSelector((state: rootState) => state.products);
    const dispatcher = useDispatch();
    const apiProduct = useMemo(() => new ProductRepository(), []);

    useEffect(() => {
        apiProduct
            .getAll()
            .then((products) => dispatcher(ac.loadActionCreator(products)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiProduct, dispatcher]);

    const handleUpdate = (updateProduct: Partial<IProduct>) => {
        apiProduct
            .update(updateProduct)
            .then((product: IProduct) =>
                dispatcher(ac.updateActionCreator(product))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (product: IProduct) => {
        apiProduct
            .delete(product.id)
            .then(() => dispatcher(ac.deleteActionCreator(product)))
            .catch((error: Error) => console.log(error.name, error.message));
    };

    return {
        products,
        handleUpdate,
        handleDelete,
    };
};
