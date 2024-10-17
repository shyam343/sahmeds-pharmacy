import React from 'react';
import './LabTests.css'; // Create this CSS file for styling

const LabTests = () => {
  const tests = [
    {
      id: 1,
      discount: "58% OFF",
      title: "Comprehensive Full Body Check up Test with Vitamin D & B12",
      description: "Measures Vitamin D & B12 levels and other essential parameters",
      originalPrice: "₹4599",
      discountedPrice: "₹1949",
      image: "../test/vdb.png", 
    },
    {
      id: 2,
      discount: "60% OFF",
      title: "Healthy 2024 Full Body Checkup",
      description: "Diagnostic tool for screening and monitoring of your health",
      originalPrice: "₹3599",
      discountedPrice: "₹1449",
      image: "../test/fullbody.jpg",
    },
    {
      id: 3,
      discount: "43% OFF",
      title: "Diabetes Care",
      description: "Specially designed package to cover the preventive care aspects for diabetics",
      originalPrice: "₹1399",
      discountedPrice: "₹799",
      image: "../test/diabetes.jpeg",
    },
    {
      id: 4,
      discount: "53% OFF",
      title: "Basic Health Checkup",
      description: "Assesses health of 47 essential body parameters",
      originalPrice: "₹2249",
      discountedPrice: "₹1049",
      image: "../test/bhc.jpeg",
    },
  ];

  return (
    <div className="lab-tests-section">
      <h2>Frequently Booked Lab Tests</h2>
      <div className="lab-tests-cards">
        {tests.map((test) => (
          <div key={test.id} className="card">
            <div className="discount">{test.discount}</div>
            <h3>{test.title}</h3>
            <p>{test.description}</p>
            <div className="pricing">
              <span className="original-price">{test.originalPrice}</span>
              <span className="discounted-price">{test.discountedPrice}</span>
            </div>
            <img src={test.image} alt={test.title} className="test-img" />
          </div>
        ))}
      </div>
      <a href="/view-all-link" className="view-all-link">View All</a>
    </div>
  );
};

export default LabTests;
