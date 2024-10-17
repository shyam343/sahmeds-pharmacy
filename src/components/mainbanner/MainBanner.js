import React, { useState, useEffect } from "react";
import './MainBanner.css';
import anil from './doctor-anil.jpg';  // Correct import path
import sah from './sah.jpg';  // Correct import path

const doctors = [
  [
    {
      imgSrc: anil,  // Use the imported image
      name: "Dr. Raj Kumar Yadav",
      nmc: "Nmc no.13420",
      specialization: "Physician MD",
      schedule: "Sunday to Friday 6pm Onwards",
      checkup: "Home Check up"
    },
    {
      imgSrc: sah,  // Use the imported image
      name: "Dr. Shyam Sah",
      nmc: "Nmc no.20589",
      specialization: "MD OBS / Gyane",
      schedule: "Sunday & Thursday 3pm, Saturday 10am",
      checkup: "Home Check Up"
    }
  ],
  [
    {
        imgSrc: sah,  // Use the imported image
        name: "Dr. Shyam Sah",
        nmc: "Nmc no.20589",
        specialization: "MD OBS / Gyane",
        schedule: "Sunday & Thursday 3pm, Saturday 10am",
        checkup: "Home Check Up"
      },
    {
      imgSrc: anil,  // Another use of the imported image
      name: "Dr. Anil Kumar Yadav",
      nmc: "Nmc no.13420",
      specialization: "Physician MD",
      schedule: "Sunday to Friday 6pm Onwards",
      checkup: "Home Check up"
    }
  ]
];

function MainBanner() {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);

  const nextGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevGroup = () => {
    setCurrentGroupIndex((prevIndex) => (prevIndex - 1 + doctors.length) % doctors.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextGroup();
    }, 10000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-banner">
      <button className="arrow left-arrow" onClick={prevGroup}>
        &#9664; {/* Left arrow */}
      </button>
      
      <div className="doctor-group">
        {doctors[currentGroupIndex].map((doctor, index) => (
          <div className="doctor-profile" key={index}>
            <img src={doctor.imgSrc} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>{doctor.nmc}</p>
            <p>{doctor.specialization}</p>
            <p>{doctor.schedule}</p>
            {doctor.checkup && <p>{doctor.checkup}</p>}
          </div>
        ))}
      </div>

      <button className="arrow right-arrow" onClick={nextGroup}>
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
}

export default MainBanner;
