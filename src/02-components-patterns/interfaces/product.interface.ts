import { JSX, ReactElement } from "react"

export interface ProductCardProps {
    product: Product,
    children?: ReactElement | ReactElement[]
}

export interface Product {
    id: string,
    title: string,
    img?: string
}

export type IncreaseBy = (value: number) => void

export interface ProductContextProps {
    counter: number;
    increaseBy: IncreaseBy;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ product, children }: ProductCardProps): JSX.Element,
    Title: ({ title }: { title?: string }) => JSX.Element,
    Image: ({ img }: { img?: string }) => JSX.Element,
    Buttons: () => JSX.Element,
}

