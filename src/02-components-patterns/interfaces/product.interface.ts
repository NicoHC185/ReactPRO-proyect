import { JSX } from "react"
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardImage } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductCardTitleProps } from "../components/ProductTitle";

export type IncreaseBy = (value: number) => void

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps {
    counter: number;
    increaseBy: IncreaseBy;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ product, children, className }: ProductCardProps): JSX.Element,
    Title: (Props: ProductCardTitleProps) => JSX.Element,
    Image: (Props: ProductCardImage) => JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}

