import { createContext } from 'react'

// import { Product, ProductCardProps, ProductContextProps } from '../interfaces/interfaces';
import { InitialValues, onChangeArgs, Product,  ProductCardHandlers,  ProductContextProps } from '../interfaces/interfaces';

import { useProducts } from '../hooks/useProducts';

import styles from '../styles/styles.module.css';
// import { ProductTitle, ProductButtons, ProductImage } from './';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;



export interface Props {
    product: Product;
    // children?: ( mensaje: string ) => React.ReactElement;
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } 
        = useProducts({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div 
                className={ `${ styles.productCard } ${ className }` }
                style={ style }
            >

                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,

                        increaseBy,
                        reset
                    }) 
                }

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