import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from './App'
import pages from './pages/index';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children: pages
    }
])

export default router