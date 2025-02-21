import { Product } from "../interfaces/product.interface"

const product1: Product = {
    id: '1',
    title: 'Coffe mug',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Coffe mug - Meme',
    img: './coffee-mug2.png'
}

export const products: Product[] = [product1, product2]