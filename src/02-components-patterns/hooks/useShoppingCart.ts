import { useState } from "react"
import { Product, ProductInCart, ShoppingCart } from "../interfaces/product.interface"

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({})

    const onProductCountChange = ({ product, count }: { product: Product, count: number }) => {
        setShoppingCart(prev => {
            const productInCart: ProductInCart = prev[product.id] || { ...product, count: 0 }
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return { ...prev, [product.id]: productInCart }
            }
            const { [product.id]: _, ...res } = prev
            return { ...res }
        })
    }

    return {
        shoppingCart,
        onProductCountChange,
    }
}
