
// import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import './About.css';
import ceo from '../../../../assets/ceo.jpg'


const About = () => {
    return (
        <div className="about-page">
            <div className="about-container">
                <AnimatedSection>
                    <h1 className="about-title">À Propos de Moi</h1>
                </AnimatedSection>

                <div className="about-content">
                    <AnimatedSection delay="100ms" className="about-image-section">
                        <img
                            src={ceo}
                            alt="Loic BATO"
                            className="about-image"
                        />
                    </AnimatedSection>

                    <div className="about-text">
                        <AnimatedSection delay="200ms">
                            <h2 className="about-heading">Un profil hybride au service de l'innovation</h2>
                            <p>
                                Passionné par la technologie et la résolution de problèmes, j'ai construit un parcours unique à l'intersection du développement logiciel, de l'analyse de données et de l'entrepreneuriat. Mon objectif est de créer des produits qui non seulement fonctionnent parfaitement, mais qui apportent également une valeur mesurable en s'appuyant sur des données intelligentes.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay="300ms">
                            <h3 className="about-subheading">Mon parcours</h3>
                            <p>
                                Après une formation en statistiques et en informatique, j'ai débuté ma carrière en tant que Data Analyst, où j'ai appris à traduire des ensembles de données complexes en stratégies commerciales. Frustré par les limitations des outils existants, je me suis plongé dans le développement d'applications pour construire moi-même les solutions que j'imaginais. Cette double compétence est aujourd'hui au cœur de mon approche.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay="400ms">
                            <h3 className="about-subheading">Mon rôle de CEO</h3>
                            <p>
                                En tant que CEO de deux entreprises technologiques, mon rôle va au-delà du code. Je suis responsable de la vision produit, de la stratégie de croissance et de la constitution d'équipes performantes. Cette expérience m'a donné une perspective complète sur le cycle de vie d'un produit, de l'idée initiale à la mise sur le marché et à sa croissance.
                            </p>
                        </AnimatedSection>

                        {/* <AnimatedSection delay="500ms" className="about-cta">
                            <a
                                href="/cv.pdf"
                                download
                                className="cv-button"
                            >
                                Télécharger mon CV
                            </a>
                        </AnimatedSection> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
