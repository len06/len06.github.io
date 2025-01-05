import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard.tsx';
import {data} from '../components/ProjectCard/ProjectCardData.tsx'; 
import '../styles/project.css';

function Projects(){
    return(
        <div className="project-cards-container">
            <div className="project-cards-wrapper">
                <h1 className="project-cards-header">My Projects</h1>
                {data.map((data) => {
                    return(
                        <ProjectCard img={data.img} header={data.header} text={data.text} />
                    )
                })
                }
            </div>
            <img className="project-page-img" src="/Project_image/magnolia-background(1).jpg" alt="magnolia art"></img>
        </div>
    )
}

export default Projects;