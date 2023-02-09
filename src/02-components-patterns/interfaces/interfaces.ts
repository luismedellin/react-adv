import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[]
// }

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
}

// export interface ProductCardHOCProps {
//     ({ children, product }: ProductCardProps ): JSX.Element,  
//     Title: ({ title }: { title?: string }) => JSX.Element,
//     Image: ({ img }: { img?: string }) => JSX.Element,
//     Buttons: ({ className }: { className?: string }) => JSX.Element
// }

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element,  
    Buttons:( Props: ProductButtonsProps) => JSX.Element,
    Image:  ( Props: ProductImageProps ) => JSX.Element,
    Title:  ( Props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
    product: Product;
    count: number;
}