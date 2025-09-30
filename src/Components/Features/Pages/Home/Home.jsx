
// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { CeoIcon, DataIcon, DevIcon } from '../../Icons';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { companiesData, projectsData } from '../../Data';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import ceo from '../../../../assets/ceo.jpg'


const Home = () => {
    const featuredProjects = projectsData.slice(0, 3);
    //   const topSkills = skillsData.flatMap(cat => cat.skills).slice(0, 6);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <AnimatedSection>
                            <div className="hero-tags">
                                <span className="hero-tag">
                                    <DevIcon className="hero-tag-icon" />
                                    <span>DEV</span>
                                </span>
                                <span className="hero-tag">
                                    <DataIcon className="hero-tag-icon" />
                                    <span>DATA</span>
                                </span>
                                <span className="hero-tag">
                                    <CeoIcon className="hero-tag-icon" />
                                    <span>CEO</span>
                                </span>
                            </div>
                            <h1 className="hero-title">
                                Loic T. BATO

                            </h1>
                            <p className="hero-description">
                                Développeur d'applications & Data Analyst, CEO de @LMS Empire & @BAT LAB. J'aide les startups à transformer les données en produits.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/projects" className="hero-button-primary">
                                    Voir mes projets
                                </Link>
                                <Link to="/contact" className="hero-button-secondary">
                                    Me contacter
                                </Link>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay="200ms">
                            <div className="hero-image-container">
                                <div className="hero-image-gradient"></div>
                                <img
                                    src={ceo}
                                    alt="Loic BATO"
                                    className="hero-image"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <AnimatedSection>
                <div className="projects-container">
                    <h2 className="section-title">Projets en vedette</h2>
                    <div className="projects-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                    <div className="projects-cta">
                        <Link to="/projects" className="projects-link">
                            Voir tous les projets &rarr;
                        </Link>
                    </div>
                </div>
            </AnimatedSection>

            {/* Companies Section */}
            <AnimatedSection>
                <div className="companies-container">
                    <h2 className="section-title">Mes entreprises</h2>
                    <div className="companies-grid">
                        {companiesData.map(company => (
                            <CompanyCard key={company.name} company={company} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Home;
