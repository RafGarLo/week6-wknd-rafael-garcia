import { IProduct } from "../../../../models/product";
import { Repository } from "./repository";

export class ProductRepository implements Repository<IProduct> {
    url: string;
    constructor(
        url = "https://202211w6ch1saramireyapatricia-production.up.railway.app/furniture"
    ) {
        this.url = url ? url : (process.env.REACT_APP_URL_TASKS as string);
    }
    createError(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = "HTTPError";
        return error;
    }
    getAll(): Promise<Array<IProduct>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
    create(product: Partial<IProduct>): Promise<IProduct> {
        return fetch(this.url, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
    delete(id: number): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: "DELETE",
        }).then((response) => {
            if (!response.ok) throw this.createError(response);
        });
    }
    update(partialProduct: Partial<IProduct>): Promise<IProduct> {
        return fetch(`${this.url}/${partialProduct.id}`, {
            method: "PATCH",
            body: JSON.stringify(partialProduct),
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createError(response);
            })
            .catch((error) => {
                return `${error}`;
            });
    }
}
