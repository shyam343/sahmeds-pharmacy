// src/components/Companies.js
import React from 'react';
import './Companies.css'; 

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: 'Cadila Pharmaceuticals',
      image: '/company/cadila.jpeg', 
    },
    {
      id: 2,
      name: 'Clean & Clear',
      image: '/company/clean.png',
    },
    {
      id: 3,
      name: 'Abbott',
      image: '/company/Abbott.jpeg',
    },
    {
      id: 4,
      name: 'Nimbus Pharmaceuticals',
      image: '/company/nimbus.png',
    },
  ];

  return (
    <div className="companies-container">
      <h2>Companies</h2>
      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <img src={company.image} alt={company.name} />
            <h3>{company.name}</h3>
          </div>
        ))}
      </div>
      <a href="#more" className="view-more">View more</a>
    </div>
  );
};

export default Companies;
