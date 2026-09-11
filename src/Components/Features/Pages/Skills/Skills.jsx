
// import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import { skillsData } from '../../Data';
import './Skills.css';

const SkillPill = ({ name, icon: Icon }) => (
  <div className="skill-pill">
    <Icon className="skill-icon" />
    <span className="skill-name">{name}</span>
  </div>
);

const SkillsCategory = ({ category, delay }) => (
  <AnimatedSection delay={`${delay}ms`}>
    <div className="category-card">
      <h3 className="category-title">{category.title}</h3>
      <div className="skills-grid">
        {category.skills.map((skill) => (
          <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  </AnimatedSection>
);

const Skills = () => {
  return (
    <div className="skills-page">
      <div className="skills-container">
        <AnimatedSection>
          <h1 className="skills-title">Compétences & Technologies</h1>
          <p className="skills-description">
            Mon expertise couvre le cycle complet de la donnée, le développement web et la modélisation IA : de la collecte et le nettoyage des données à la création de solutions utiles, robustes et orientées décision business.
          </p>
        </AnimatedSection>

        <div className="categories-grid">
          {skillsData.map((category, index) => (
            <SkillsCategory key={category.title} category={category} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
