
import { JSX, lazy, LazyExoticComponent } from "react";
import NoLazypage from "../01-Lazyload/pages/NoLazypage";

type JSXComponent = () => JSX.Element

interface IRouters {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ '../01-Lazyload/layout/LazyLayout'))

export const routes: IRouters[] = [
    {
        path: '/lazyLayout/*',
        to: '/lazyLayout',
        Component: LazyLayout,
        name: 'LazyLayout'
    },
    {
        to: '/NoLazy',
        path: 'NoLazy',
        Component: NoLazypage,
        name: 'NoLazy'
    },
]