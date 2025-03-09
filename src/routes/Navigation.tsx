import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import {
    RegisterPage,
    FormikBasicPage,
    FormikYupPage,
    FormikComponentPage,
    FormikAbstractPage,
    RegisterFormikPage,
    DynamicForm
} from '../03-forms/pages';

import logo from '../logo.svg'


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstract" className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik abstract</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register-formik-page" className={({ isActive }) => isActive ? 'nav-active' : ''}>Register formik page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dynamic-form" className={({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic form page</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="register" element={<RegisterPage></RegisterPage>} />
                    <Route path="formik-basic" element={<FormikBasicPage></FormikBasicPage>} />
                    <Route path="formik-yup" element={<FormikYupPage></FormikYupPage>} />
                    <Route path="formik-components" element={<FormikComponentPage></FormikComponentPage>} />
                    <Route path="formik-abstract" element={<FormikAbstractPage></FormikAbstractPage>} />
                    <Route path="register-formik-page" element={<RegisterFormikPage></RegisterFormikPage>} />
                    <Route path="dynamic-form" element={<DynamicForm></DynamicForm>} />
                    <Route path="/*" element={<Navigate to="/register" replace />} />
                </Routes>

            </div>
        </BrowserRouter>
    )
}