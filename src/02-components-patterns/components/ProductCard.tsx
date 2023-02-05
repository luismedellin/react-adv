import { createContext } from 'react'

// import { Product, ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { Product,  ProductContextProps } from '../interfaces/interfaces';

import { useProducts } from '../hooks/useProducts';

import styles from '../styles/styles.module.css';
// import { ProductTitle, ProductButtons, ProductImage } from './';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const {counter, increaseBy} = useProducts();

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >

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