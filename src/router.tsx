import React from 'react';
import {createHashRouter,createBrowserRouter} from 'react-router-dom';
import App from './App'
import pages from './pages/index';

const router = createHashRouter([
    {
        path:'/',
        element:<App />,
        children: pages
    }
],{
    basename:"/personal_website"
})

export default router