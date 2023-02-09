import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';
import { useState } from 'react';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [ product, product2];

interface ProductInCart extends Product {
    count: number;
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductCountChange = ( { count, product }: { count: number, product: Product } ) => {
        // console.log('onProductCountChange', count, product);

        setShoppingCart( oldShoppingCart => {
            if( count === 0 ) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;
                console.log( toDelete, rest );
                return rest
            }

            return {
                ...oldShoppingCart,
                [ product.id ]: { ...product, count }
            }
        })
    }

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {/* <ProductCard product={product}>
                <ProductCard.Image />
                <ProductCard.Title title={ '' }/>
                <ProductCard.Buttons counter={0} increaseBy={function (value: number): void {
                      throw new Error("Function not implemented.")
                  } } />
            </ProductCard> */}

            {/* <ProductCard product={product}>
                <ProductImage />
                <ProductTitle title={ '' }/>
                <ProductButtons counter={0} increaseBy={function (value: number): void {
                    throw new Error("Function not implemented.")
                } } />
            </ProductCard> */}

            {
                products.map( product => (
                    <ProductCard 
                        key={ product.id }
                        product={product}
                        className="bg-dark text-bold"
                        onChange={ onProductCountChange }
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image" />
                        <ProductTitle className="text-white" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }

            {/* <ProductCard 
                product={product}
                style={{
                   backgroundColor: '#70D1F8'
                }}
            >
                <ProductImage style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                <ProductTitle style={{ fontWeight: 'bold' }} />
                <ProductButtons style={{
                    display: 'flex',
                    justifyContent: 'end'
                }} />
            </ProductCard> */}

        </div>

        <div className="shopping-cart">

            {
                Object.entries( shoppingCart ).map(([ key, product ]) => (
                    <ProductCard 
                        key={ key }
                        product={product}
                        className="bg-dark text-bold"
                        style={{ width: '100px' }}
                        onChange={ onProductCountChange }
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons 
                            className="custom-buttons" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        />
                    </ProductCard>
                ))
            }

        </div>

        <div>
            <pre>
                { JSON.stringify(shoppingCart, null, 5) }
            </pre>
        </div>

    </div>
  )
}
