
import { JSX, lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element

interface IRouters {
    to: string,
    path: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent
    name: string
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/ '../01-Lazyload/pages/Lazypage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/ '../01-Lazyload/pages/Lazypage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/ '../01-Lazyload/pages/Lazypage3'))

export const routeDefault = {
    to: '/lazy1',
    path: 'lazy1',
    Component: Lazy1,
    name: 'Lazy1'
}

export const routes: IRouters[] = [
    routeDefault,
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy3'
    }
]