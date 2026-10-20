
// import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Chip,
    Stack,
    Typography
} from '@mui/material';
import {
    Analytics,
    Api,
    AutoAwesome,
    BarChart,
    Code,
    DashboardCustomize,
    DataObject,
    GitHub,
    Insights,
    Memory,
    QueryStats,
    Science,
    Speed,
    Storage,
    TableChart,
    Terminal
} from '@mui/icons-material';
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
        { name: 'React', icon: <Code fontSize="small" />, color: '#61dafb' },
        { name: 'Python', icon: <Science fontSize="small" />, color: '#4fc3f7' },
        { name: 'SQL', icon: <Storage fontSize="small" />, color: '#66bb6a' },
        { name: 'Power BI', icon: <BarChart fontSize="small" />, color: '#ffb300' },
        { name: 'Tableau', icon: <Insights fontSize="small" />, color: '#4fc3f7' },
        { name: 'FastAPI', icon: <Api fontSize="small" />, color: '#00c853' },
        { name: 'JavaScript', icon: <Code fontSize="small" />, color: '#fdd835' },
        { name: 'PyTorch', icon: <Memory fontSize="small" />, color: '#ff7043' },
        { name: 'PostgreSQL', icon: <DataObject fontSize="small" />, color: '#5c6bc0' },
        { name: 'Node.js', icon: <Terminal fontSize="small" />, color: '#8bc34a' },
        { name: 'GitHub', icon: <GitHub fontSize="small" />, color: '#e0e0e0' },
        { name: 'Docker', icon: <DashboardCustomize fontSize="small" />, color: '#42a5f5' },
        { name: 'Figma', icon: <AutoAwesome fontSize="small" />, color: '#ff8a65' },
        { name: 'Excel', icon: <TableChart fontSize="small" />, color: '#81c784' },
        { name: 'MongoDB', icon: <QueryStats fontSize="small" />, color: '#4db6ac' },
        { name: 'TensorFlow', icon: <Speed fontSize="small" />, color: '#f06292' },
        { name: 'Scikit-learn', icon: <Analytics fontSize="small" />, color: '#7e57c2' }
    ];
    //   const topSkills = skillsData.flatMap(cat => cat.skills).slice(0, 6);

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="hero-content">
                        <AnimatedSection>
                            <Stack className="hero-tags" direction="row" flexWrap="wrap" spacing={1}>
                                <Box component="span" className="hero-tag">
                                    <DevIcon className="hero-tag-icon" />
                                    <span>DEV</span>
                                </Box>
                                <Box component="span" className="hero-tag">
                                    <DataIcon className="hero-tag-icon" />
                                    <span>DATA</span>
                                </Box>
                                <Box component="span" className="hero-tag">
                                    <CeoIcon className="hero-tag-icon" />
                                    <span>CEO</span>
                                </Box>
                            </Stack>

                            <Typography variant="h2" className="hero-title">
                                Tarekpessou Loïc BATO
                            </Typography>
                            <Typography variant="body1" className="hero-description">
                                Data Analyst - Développeur Web - ML - Data Scientist. Je conçois des solutions techniques, analytiques et intelligentes qui transforment les données brutes en valeur exploitable pour les entreprises et les projets innovants.
                            </Typography>

                            <Stack className="hero-metrics" direction="row" spacing={1.2} aria-label="statistiques de profil">
                                <Box className="hero-metric">
                                    <Typography className="hero-metric-value">+5</Typography>
                                    <Typography className="hero-metric-label">ans de terrain</Typography>
                                </Box>
                                <Box className="hero-metric">
                                    <Typography className="hero-metric-value">Master</Typography>
                                    <Typography className="hero-metric-label">IA & Big Data</Typography>
                                </Box>
                                <Box className="hero-metric">
                                    <Typography className="hero-metric-value">Full-stack</Typography>
                                    <Typography className="hero-metric-label">+ Data</Typography>
                                </Box>
                            </Stack>

                            <Stack className="hero-buttons" direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                                <Button
                                    component={Link}
                                    to="/projects"
                                    variant="contained"
                                    color="primary"
                                    className="hero-button-primary"
                                >
                                    Découvrir mes projets
                                </Button>
                                <Button
                                    component={Link}
                                    to="/contact"
                                    variant="outlined"
                                    color="primary"
                                    className="hero-button-secondary"
                                >
                                    Travailler avec moi
                                </Button>
                            </Stack>
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
                <Box className="tech-carousel-wrap" aria-label="Technologies maîtrisées">
                    <Stack direction="row" spacing={1} className="tech-carousel-track">
                        {[...techLogos, ...techLogos].map((tech, index) => (
                            <Chip
                                key={`${tech.name}-${index}`}
                                className="tech-badge"
                                label={tech.name}
                                title={tech.name}
                                size="small"
                                icon={
                                    <Box component="span" sx={{ display: 'flex', alignItems: 'center', color: tech.color }}>
                                        {tech.icon}
                                    </Box>
                                }
                                sx={{
                                    backgroundColor: 'rgba(15, 23, 42, 0.72)',
                                    border: '1px solid rgba(0, 130, 84, 0.25)',
                                    color: '#e6f4ed',
                                    fontWeight: 700,
                                    fontSize: '0.68rem',
                                    height: '2rem',
                                    borderRadius: '999px',
                                    px: 0.8,
                                    '& .MuiChip-label': { px: 0.4, fontSize: '0.68rem' },
                                    '& .MuiChip-icon': { ml: 0.7, mr: 0.2, display: 'flex', alignItems: 'center' }
                                }}
                            />
                        ))}
                    </Stack>
                </Box>
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
