import React from 'react';
import About from './About.tsx';
import Contact from './Contact.tsx';
import Home from './Home.tsx';
import Projects from './Projects.tsx';

const pages = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/about',
        element:<About />
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