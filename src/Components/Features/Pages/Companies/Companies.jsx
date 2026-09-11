
// import React from 'react';
import AnimatedSection from '../../Components/AnimatedSection/AnimatedSection';
import CompanyCard from '../../Components/CompanyCard/CompanyCard';
import { companiesData } from '../../Data';
import './Companies.css';

const Companies = () => {
  return (
    <div className="companies-page">
      <div className="companies-container">
        <AnimatedSection>
          <h1 className="companies-title">Mes Entreprises</h1>
          <p className="companies-description">
            En plus de mon travail technique, j’anime des projets entrepreneuriaux qui combinent innovation, stratégie et création de valeur dans le numérique, la mode et les solutions orientées données.
          </p>
        </AnimatedSection>

        <div className="companies-grid">
          {companiesData.map((company, index) => (
            <AnimatedSection key={company.name} delay={`${index * 150}ms`}>
              <CompanyCard company={company} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
