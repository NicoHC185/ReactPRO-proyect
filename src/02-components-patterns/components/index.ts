import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImages'
import { ProductTitle } from './ProductTitle'
import { ProductCardHOCProps } from '../interfaces/product.interface'

export * from './ProductButtons'
export * from './ProductImages'
export * from './ProductTitle'


export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})


export default ProductCard