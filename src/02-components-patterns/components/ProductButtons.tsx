import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { IncreaseBy } from "../interfaces/product.interface"

export interface Props {
    className?: string;
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, increaseBy } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`} style={style}>
            <ProductButtonMinus increaseBy={increaseBy} />
            <div className={styles.countLabel}> {counter} </div>
            <ProductButtonAdd increaseBy={increaseBy} />
        </div>
    )
}

export const ProductButtonMinus = ({ increaseBy }: { increaseBy: IncreaseBy }) => {
    return (
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
    )
}

export const ProductButtonAdd = ({ increaseBy }: { increaseBy: IncreaseBy }) => {
    return (
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}> + </button>
    )
}