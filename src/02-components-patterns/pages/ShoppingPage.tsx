import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/product.interface"
import '../styles/custom.styles.css'

const product: Product = {
    id: '1',
    title: 'Coffe mug',
    img: './coffee-mug.png'
}

const product2: Product = {
    id: '2',
    title: 'Cellphone',
}

export const ShoppingPage = () => {

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
                <ProductCard product={product} className="bg-dark">
                    <ProductImage className="custom-img" />
                    <ProductTitle className="text-white text-bold" />
                    <ProductButtons className='custom-button' />
                </ProductCard>

                <ProductCard product={product2} className="bg-dark">
                    <ProductCard.Image className="custom-img" />
                    <ProductCard.Title className="text-white text-bold" />
                    <ProductCard.Buttons className='custom-button' />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: 'rgb(90 23 34)'
                    }}
                >
                    <ProductImage
                        style={{
                            borderRadius: '20px',
                            padding: '10px',
                            width: 'calc(100% - 20px)'
                        }}
                    />
                    <ProductTitle
                        style={{
                            color: "white"
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    />
                </ProductCard>
            </div>
        </div>
    )
}
