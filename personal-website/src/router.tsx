import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import App from './App.tsx'
import pages from './pages/index.tsx';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children: pages
    }
])

export default router