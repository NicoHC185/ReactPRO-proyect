import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routeDefault, routes } from './routes'

import logo from '../logo.svg'
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(route =>
                (<li key={route.to}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => isActive ? 'nav-active' : ''}
                  >
                    {route.name}
                  </NavLink>
                </li>)
                )
              }
            </ul>
          </nav>
          <Routes>
            {
              routes.map(({ path, Component }) =>
                <Route
                  path={path}
                  element={<Component />}
                  key={`route-${path}`}
                />
              )
            }
            <Route path="/*" element={<Navigate to={routeDefault.to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}
