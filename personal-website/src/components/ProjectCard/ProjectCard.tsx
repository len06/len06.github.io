import React from 'react';
import './ProjectCard.css';

function ProjectCard({img,header,text}){
    return(
        <div className="project-card-container">
            <img src={img} alt="project-image" className="project-card-img"></img>
            <div className="project-card-text-container">
                <h1 className="project-card-header">{header}</h1>
                <p className="project-card-desc">{text}</p>
            </div>
        </div>
    )
}

export default ProjectCard;