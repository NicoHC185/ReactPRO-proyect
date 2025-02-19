import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'
import { IncreaseBy } from "../interfaces/product.interface"

export const ProductButtons = () => {
    const { counter, increaseBy } = useContext(ProductContext)

    return (
        <div className={styles.buttonsContainer}>
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