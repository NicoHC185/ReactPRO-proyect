import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/product.interface"
import '../styles/custom.styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"
import { products } from "../data/products"

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div >
            <h1>Shopping store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >

                {
                    products.map((product: Product) => {
                        return (
                            <ProductCard
                                product={product}
                                className="bg-dark"
                                key={product.id}
                                value={shoppingCart[product.id]?.count}
                                onChange={({ product, count }) => onProductCountChange({ product, count })}
                            >
                                <ProductImage className="custom-img" />
                                <ProductTitle className="text-white text-bold" />
                                <ProductButtons className='custom-button' />
                            </ProductCard>
                        )
                    })
                }

                <div className="shopping-cart">
                    {
                        Object.entries(shoppingCart).map(([key, product]) => (
                            <ProductCard
                                key={key}
                                product={product}
                                className="bg-dark"
                                style={{
                                    width: '100px'
                                }}
                                value={product.count}
                                onChange={({ product, count }) => onProductCountChange({ product, count })}
                            >
                                <ProductImage className="custom-img" />
                                <ProductButtons
                                    className='custom-button'
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}
                                />
                            </ProductCard>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
