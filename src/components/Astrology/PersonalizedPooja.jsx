import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function PersonalizedPooja() {
  const navigate = useNavigate();
  const head = "Personalized Pooja";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Personalized Pooja</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-pp"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Personalized pooja involves tailoring traditional Hindu rituals
              and prayers to an individual's specific needs, desires, or
              circumstances. It could include selecting particular deities,
              mantras, offerings, and rituals based on one's spiritual goals,
              challenges, or blessings sought. This customization allows for a
              more intimate and meaningful connection with the divine, fostering
              a deeper sense of devotion, gratitude, and spiritual growth.
              Whether performed for seeking blessings, resolving obstacles, or
              expressing gratitude, personalized pooja reflects the unique
              journey and aspirations of the individual, providing solace,
              guidance, and a profound sense of connection with the divine
              energies that govern the universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalizedPooja;