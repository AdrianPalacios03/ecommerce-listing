import { Product } from "../types";

export const productToCartItem = (product: Product) => {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
    };
}