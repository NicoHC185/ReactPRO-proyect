import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/product.interface"

const product: Product = {
    id: '1',
    title: 'Coffe mug',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Cellphone',
    // img: './coffee-mug.png'
}

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping store</h1>
            <hr />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}
            >
                <ProductCard product={product}>
                    <ProductImage ></ProductImage>
                    <ProductTitle title={'sadf'} ></ProductTitle>
                    <ProductButtons />
                </ProductCard>
                <ProductCard product={product2}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}
