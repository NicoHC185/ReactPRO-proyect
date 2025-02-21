import { useState } from "react"
import { Product, ProductInCart, ShoppingCart } from "../interfaces/product.interface"

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

    const onProductCountChange = ({ product, count }: { product: Product, count: number }) => {
        setShoppingCart(prev => {
            if (count === 0) {
                const { [product.id]: _, ...res } = prev
                return { ...res }
            }
            return { ...prev, [product.id]: { ...product, count } }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
