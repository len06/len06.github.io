import React from 'react';
import './ProjectCard.css';

interface ProjectCardProp{
    img:string,
    header:string,
    text: string
}

function ProjectCard(props:ProjectCardProp){
    return(
        <div className="project-card-container">
            <img src={props.img} alt="project-image" className="project-card-img"></img>
            <div className="project-card-text-container">
                <h1 className="project-card-header">{props.header}</h1>
                <p className="project-card-desc">{props.text}</p>
            </div>
        </div>
    )
}

export default ProjectCard;