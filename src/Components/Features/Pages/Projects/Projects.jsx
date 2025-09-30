
// import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { projectsData } from '../../Data';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <AnimatedSection>
          <h1 className="projects-title">Mes Projets</h1>
          <p className="projects-description">
            Une sélection de projets qui illustrent mon expertise en développement d'applications et en analyse de données. Chaque projet représente un défi unique et une solution sur mesure.
          </p>
        </AnimatedSection>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.slug} delay={`${index * 100}ms`}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
