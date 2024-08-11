import React from 'react'
import { useRoutes } from 'react-router-dom'
import Homepage from '../pages/Homepage'

function AppRoutes() {
    const AppRoutes = useRoutes([
        {
            path: "/",
            element: <Homepage />
        },
        {
            path: "/home",
            element: <Homepage />
        },
        {
            path: "/contact",
            element: <Homepage />
        },
        {
            path: "/login",
            element: <Homepage />
        },
        {
            path: "/signup",
            element: <Homepage />
        }
    ])
    return AppRoutes
}

export default AppRoutes