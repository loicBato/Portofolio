
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card"
    >
      <div className="project-image-container">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="project-image"
        />
      </div>
      <div className="project-content">
        <div className="project-tags">
          {project.tags.slice(0, 3).map(tag => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <span className="project-link">
          Voir plus &rarr;
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
