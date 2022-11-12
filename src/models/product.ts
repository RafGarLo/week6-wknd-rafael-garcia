export interface IProduct {
    id: number;
    name: string;
    category: string;
    overview: string;
    picture: string;
    on_sale: boolean;
    price: string;
    reduced_price?: string;
}
