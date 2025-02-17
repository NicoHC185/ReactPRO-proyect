import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import Lazypage1 from "../pages/Lazypage1"
import Lazypage2 from "../pages/Lazypage2"
import Lazypage3 from "../pages/Lazypage3"


const LazyLayout = () => {
    return (
        <>
            <div>LazyLayout Page
                <ul>
                    <li>
                        <NavLink to={'lazy1'}>{'Lazy1'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'lazy2'}>{'Lazy2'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={'lazy3'}>{'Lazy3'}</NavLink>
                    </li>
                </ul>
                <Routes>
                    <Route path="/lazy1" element={<Lazypage1 />} />
                    <Route path="/lazy2" element={<Lazypage2 />} />
                    <Route path="/lazy3" element={<Lazypage3 />} />
                    <Route path="/*" element={<Navigate to={'lazy1'} replace />} />
                </Routes>
            </div>
        </>
    )
}

export default LazyLayout