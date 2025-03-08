import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import { products } from "../data/products"

const product = products[1]

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping store</h1>
            <hr />
            <ProductCard
                product={product}
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 5,
                }}
            >
                {(args) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                )}
            </ProductCard>
        </div>
    )
}
