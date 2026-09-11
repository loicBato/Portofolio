
// import React from 'react';
import { Link } from 'react-router-dom';
import {
    SiReact,
    SiPython,
    SiTableau,
    SiFastapi,
    SiJavascript,
    SiPytorch,
    SiPostgresql,
    SiNodedotjs,
    SiGithub,
    SiDocker,
    SiFigma,
    SiMongodb,
    SiTensorflow,
    SiScikitlearn
} from 'react-icons/si';
import './Home.css';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { CeoIcon, DataIcon, DevIcon } from '../../Icons';
import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { companiesData, projectsData } from '../../Data';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import ceo from '../../../../assets/ceo2.jpg'


const Home = () => {
    const featuredProjects = projectsData.slice(0, 3);
    const techLogos = [
        { name: 'React', Icon: SiReact },
        { name: 'Python', Icon: SiPython },
        { name: 'SQL', Icon: () => <span className="tech-text-icon">SQL</span> },
        { name: 'Power BI', Icon: () => <span className="tech-text-icon tech-powerbi">PBI</span> },
        { name: 'Tableau', Icon: SiTableau },
        { name: 'FastAPI', Icon: SiFastapi },
        { name: 'JavaScript', Icon: SiJavascript },
        { name: 'PyTorch', Icon: SiPytorch },
        { name: 'PostgreSQL', Icon: SiPostgresql },
        { name: 'Node.js', Icon: SiNodedotjs },
        { name: 'GitHub', Icon: SiGithub },
        { name: 'Docker', Icon: SiDocker },
        { name: 'Figma', Icon: SiFigma },
        { name: 'Excel', Icon: () => <span className="tech-text-icon tech-excel">XLS</span> },
        { name: 'MongoDB', Icon: SiMongodb },
        { name: 'TensorFlow', Icon: SiTensorflow },
        { name: 'Scikit-learn', Icon: SiScikitlearn }
    ];
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
                                Tarekpessou Loïc BATO
                            </h1>
                            <p className="hero-description">
                                Data Analyst - Développeur Web - ML - Data Scientist. Je conçois des solutions techniques, analytiques et intelligentes qui transforment les données brutes en valeur exploitable pour les entreprises et les projets innovants.
                            </p>

                            <div className="hero-metrics" aria-label="statistiques de profil">
                                <div className="hero-metric">
                                    <span className="hero-metric-value">+5</span>
                                    <span className="hero-metric-label">ans de terrain</span>
                                </div>
                                <div className="hero-metric">
                                    <span className="hero-metric-value">Master</span>
                                    <span className="hero-metric-label">IA & Big Data</span>
                                </div>
                                <div className="hero-metric">
                                    <span className="hero-metric-value">Full-stack</span>
                                    <span className="hero-metric-label">+ Data</span>
                                </div>
                            </div>

                            <div className="hero-buttons">
                                <Link to="/projects" className="hero-button-primary">
                                    Découvrir mes projets
                                </Link>
                                <Link to="/contact" className="hero-button-secondary">
                                    Travailler avec moi
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

            <AnimatedSection>
                <div className="tech-carousel-wrap" aria-label="Technologies maîtrisées">
                    <div className="tech-carousel-track">
                        {[...techLogos, ...techLogos].map((tech, index) => {
                            const Icon = tech.Icon;

                            return (
                                <span key={`${tech.name}-${index}`} className="tech-badge" title={tech.name}>
                                    <Icon className="tech-badge-icon" />
                                    <span>{tech.name}</span>
                                </span>
                            );
                        })}
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="value-strip">
                    <div className="value-card">
                        <span className="value-kicker">01</span>
                        <h3>Data strategy</h3>
                        <p>Collecte, contrôle qualité, nettoyage et analyse de données à grande échelle.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-kicker">02</span>
                        <h3>Produit digital</h3>
                        <p>Conception d’interfaces et de solutions web orientées utilisateur et performance.</p>
                    </div>
                    <div className="value-card">
                        <span className="value-kicker">03</span>
                        <h3>IA & modélisation</h3>
                        <p>Machine Learning et Deep Learning appliqués à des cas concrets et évolutifs.</p>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection>
                <div className="expertise-panel">
                    <div className="expertise-copy">
                        <span className="panel-label">Ce que je apporte</span>
                        <h2>Du terrain à la décision intelligente.</h2>
                        <p>
                            Je m’appuie sur une forte culture de la donnée, un sens aigu du terrain et une capacité à transformer des problématiques complexes en solutions concrètes, lisibles et exploitables.
                        </p>
                    </div>
                    <div className="expertise-list">
                        <div className="expertise-item">
                            <strong>01</strong>
                            <span>Collecte, validation et structuration des données</span>
                        </div>
                        <div className="expertise-item">
                            <strong>02</strong>
                            <span>Développement de produits web orientés performance</span>
                        </div>
                        <div className="expertise-item">
                            <strong>03</strong>
                            <span>Modélisation IA et optimisation de processus métiers</span>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

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
