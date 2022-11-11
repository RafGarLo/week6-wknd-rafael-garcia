export interface IProduct {
    id: string;
    name: string;
    category: string;
    overview: string;
    on_sale: boolean;
    price: string;
    reduced_price?: string;
}
