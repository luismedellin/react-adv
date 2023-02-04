import { createContext } from 'react'

import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import { useProducts } from '../hooks/useProducts';

import styles from '../styles/styles.module.css';
import { ProductTitle, ProductButtons, ProductImage } from './';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {

    const {counter, increaseBy} = useProducts();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={ styles.productCard }>

                { children }

                {/* <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffee Mug" /> */}
                {/* <img className={ styles.productImg } src={ noImage } alt="Coffee Mug" /> */}
                {/* <ProductImage img={ product.img } />
                <ProductTitle title={ product.title } />
                <ProductButtons counter={ counter } increaseBy={ increaseBy } /> */}
            </div>
        </Provider>
    )
}

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;