import { useContext, useMemo } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)

    const imgSrc = useMemo(() => {
        return product?.img ?? img
    }, [product, img])

    return (
        <img className={styles.productImg} src={imgSrc || noImage} alt={imgSrc ? 'Product img' : 'no image'}></img>
    )
}