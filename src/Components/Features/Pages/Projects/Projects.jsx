
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
            Une sélection de réalisations qui reflètent ma maîtrise du développement web, de la data, de l’IA et des outils de décision. Chaque projet illustre une solution pensée pour résoudre un vrai besoin métier.
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
