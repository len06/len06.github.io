import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

const pages = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/contact',
        element: <Contact />
    },
    {
        path:'/projects',
        element: <Projects />
    }
];

export default pages;