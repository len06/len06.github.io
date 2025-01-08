import React from 'react';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import {data} from '../components/ProjectCard/ProjectCardData'; 
import '../styles/project.css';

function Projects(){
    return(
        <div className="project-cards-container">
            <div className="project-cards-wrapper">
                <h1 className="project-cards-header">My Projects</h1>
                {data.map((data,index) => {
                    return(
                        <ProjectCard key={index} img={data.img} header={data.header} text={data.text} />
                    )
                })
                }
            </div>
            <img className="project-page-img" src="/personal_website/Project_image/magnolia-background.jpg" alt="magnolia art"></img>
        </div>
    )
}

export default Projects;