import styles from '../styles/styles.module.css'
import { useProducts } from '../hooks/useProducts'
import { onChangeType, Product, ProductContextProps } from '../interfaces/product.interface'
import { createContext, CSSProperties, ReactElement } from 'react'

export interface Props {
    product: Product,
    children?: ReactElement | ReactElement[],
    className?: string
    style?: CSSProperties
    value?: number
    onChange?: onChangeType
}

export const ProductContext = createContext({} as ProductContextProps)

const { Provider } = ProductContext

export const ProductCard = ({
    product,
    children,
    className,
    style,
    value,
    onChange
}: Props) => {

    const { counter, increaseBy } = useProducts({ product, value, onChange })

    return (
        <Provider value={{ counter, increaseBy, product }}>
            <div className={`${styles.productCard} ${className}`} style={style}>
                {children}
            </div>
        </Provider>
    )
}
