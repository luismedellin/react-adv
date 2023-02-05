import { ReactElement } from "react";
import { ProductCard as ProductCardHOC } from './ProductCard';
// import { Product, ProductCardHOCProps } from '../interfaces/interfaces';
import { Product, ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

// export interface Props {
//     product: Product;
//     children?: ReactElement | ReactElement[]
// }

// interface ProductCardHOCProps {
//     ({ children, product }: Props ): JSX.Element,  
//     Title: ({ title }: { title?: string }) => JSX.Element,
//     Image: ({ img }: { img?: string }) => JSX.Element,
//     Buttons: () => JSX.Element
// }

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;