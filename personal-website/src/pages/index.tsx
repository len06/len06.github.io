import React from 'react';
import Contact from './Contact.tsx';
import Home from './Home.tsx';
import Projects from './Projects.tsx';

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