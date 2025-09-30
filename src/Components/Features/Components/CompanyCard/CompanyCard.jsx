// import React from 'react';
import './CompanyCard.css';

const CompanyCard = ({ company }) => {
    return (
        <div className="company-card">
            <div className="logo-container">
                {company.logo ? (
                    <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
                ) : (
                    <div className="company-logo-placeholder"></div>
                )}
            </div>
            <h3 className="company-name">{company.name}</h3>
            <p className="company-mission">{company.mission}</p>
            <p className="company-description">{company.description}</p>
            <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="company-link"
            >
                Visiter le site &rarr;
            </a>
        </div>
    );
};

export default CompanyCard;