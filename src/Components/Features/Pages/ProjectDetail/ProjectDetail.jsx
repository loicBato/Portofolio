
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { GithubIcon } from '../../Icons';
import { projectsData } from '../../Data';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/404');
    }
  }, [project, navigate]);

  if (!project) {
    return null; // Or a loading spinner
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        {/* Header */}
        <AnimatedSection>
          <span className="project-category">{project.category}</span>
          <h2 className="project-title">{project.title}</h2>
          <p className="project-subtitle">{project.subtitle}</p>
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay="100ms">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
        </AnimatedSection>

        {/* Main Content */}
        <div className="project-content">
          <div className="project-main">
            <AnimatedSection delay="200ms">
              <h2 className="section-heading">Contexte</h2>
              <p className="section-text">{project.context}</p>
            </AnimatedSection>

            <AnimatedSection delay="300ms">
              <h2 className="section-heading">Challenge</h2>
              <p className="section-text">{project.challenge}</p>
            </AnimatedSection>

            <AnimatedSection delay="400ms">
              <h2 className="section-heading">Mon Rôle & Responsabilités</h2>
              <p className="section-text">{project.role}</p>
            </AnimatedSection>

          </div>
          {/* Sidebar */}
          <aside className="project-sidebar">
            <AnimatedSection delay="250ms">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Stack Technique</h3>
                <ul className="sidebar-list">
                  {project.stack.map(tech => (
                    <li key={tech.name} className="sidebar-item">
                      <tech.icon className="sidebar-icon" />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay="350ms">
              <div className="sidebar-card">
                <h3 className="sidebar-title">Liens</h3>
                <div className="sidebar-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link-primary"
                    >
                      Voir la démo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-link-secondary"
                    >
                      <GithubIcon className="sidebar-link-icon" />
                      Voir le code
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>

        {/* Results & Screenshots */}
        <div className="project-results">
          <AnimatedSection delay="500ms">
            <h2 className="section-title">Résultats & Captures</h2>
            <div className="results-card">
              <ul className="results-list">
                {project.results.map((result, index) => (
                  <li key={index} className="results-item">
                    <span className="results-checkmark">&#10003;</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
          <div className="screenshots-grid">
            {project.screenshots.map((src, index) => (
              <AnimatedSection key={index} delay={`${600 + index * 100}ms`}>
                <img
                  src={src}
                  alt={`Capture d'écran ${index + 1}`}
                  className="screenshot-image"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
