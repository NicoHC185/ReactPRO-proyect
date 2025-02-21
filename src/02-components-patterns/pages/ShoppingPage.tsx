import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import '../styles/custom.styles.css'

import { products } from "../data/products"

const product = products[1]

export const ShoppingPage = () => {

    return (
        <div >
            <h1>Shopping store</h1>
            <hr />
            <ProductCard
                product={product}
                className="bg-dark"
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 5,
                }}
            >
                {(args) => (
                    <>
                        <ProductImage className="custom-img" />
                        <ProductTitle className="text-white text-bold" />
                        <ProductButtons className='custom-button' />

                        <button onClick={args.reset}>reset</button>
                        <button onClick={() => args.increaseBy(-2)}>-2</button>
                        {!args.isMaxCountReached && <button onClick={() => args.increaseBy(+2)}>+2</button>}
                        <button onClick={args.reset}>count: {args.count}</button>
                    </>
                )}
            </ProductCard>
        </div>
    )
}
