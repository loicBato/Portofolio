
// import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import './About.css';
import ceo from '../../../../assets/ceo2.jpg'


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
                            <h2 className="about-heading">Un profil hybride au service de la donnée et de l’innovation</h2>
                            <p>
                                Data Analyst, développeur web et Data Scientist, rigoureux et méthodique, je combine une formation en mathématiques, un Master en Intelligence Artificielle & Big Data et une expérience terrain en collecte, contrôle et exploitation de données statistiques à grande échelle. Mon approche couvre l’ensemble du cycle de vie de la donnée, du recueil brut jusqu’à l’entraînement de modèles intelligents.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay="300ms">
                            <h3 className="about-subheading">Mon parcours</h3>
                            <p>
                                J’ai commencé par la logique mathématique et l’informatique appliquée, puis j’ai progressivement développé une expertise forte en développement web et en analyse de données. Cette double trajectoire m’a permis d’acquérir une vision complète des enjeux techniques, métiers et décisionnels liés à la donnée. Aujourd’hui, je conçois des solutions qui associent qualité du code, fiabilité des données et performance des modèles.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay="400ms">
                            <h3 className="about-subheading">Mon rôle d’entrepreneur et de data builder</h3>
                            <p>
                                En tant que CEO de BAT LAB et de LMS Empire, je suis impliqué dans la vision produit, la stratégie de croissance et la mise en œuvre de solutions utiles sur le terrain. Cette expérience me donne une perspective globale du cycle de vie d’un produit : conception, exécution, optimisation, valeur pour les utilisateurs et impact pour les entreprises.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay="500ms" className="about-cta">
                            <div className="cv-preview-panel">
                                <div className="cv-preview-header">
                                    <div>
                                        <span className="cv-kicker">CV</span>
                                        <h3>Mon curriculum vitae</h3>
                                    </div>
                                    <a href="/cv.html" target="_blank" rel="noopener noreferrer" className="cv-button">
                                        Prévisualiser
                                    </a>
                                </div>
                                <div className="cv-preview-mini">
                                    <div className="mini-header">
                                        <strong>Tarekpessou Loïc BATO</strong>
                                        <span>Data Analyst - Développeur Web - ML - Data Scientist</span>
                                    </div>
                                    <div className="mini-meta">
                                        <span>Lomé - Togo</span>
                                        <span>+228 90 45 78 86 / 96 70 15 72</span>
                                        <span>loicbato4@gmail.com</span>
                                    </div>
                                    <div className="mini-sections">
                                        <span>Profil</span>
                                        <span>Expériences</span>
                                        <span>Formation</span>
                                        <span>Compétences</span>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
