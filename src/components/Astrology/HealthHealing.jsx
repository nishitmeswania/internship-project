import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function HealthHealing() {
  const navigate = useNavigate();
  const head = "Health Healing";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Health Healing</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="img-hh"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Health healing involves restoring balance and vitality to the
              body, mind, and spirit. It encompasses holistic approaches to
              address physical ailments, mental health issues, and emotional
              well-being. Healing practices may include conventional medicine,
              alternative therapies, lifestyle changes, and spiritual practices.
              By addressing root causes rather than just symptoms, health
              healing promotes overall wellness and resilience. It emphasizes
              the body's innate ability to heal itself when supported with
              proper nutrition, exercise, rest, and stress management. Through
              personalized treatment plans and mindful interventions, health
              healing aims to optimize health outcomes, improve quality of life,
              and empower individuals to thrive in all aspects of their
              well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthHealing;