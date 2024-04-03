import React from "react";
import "./AstroMain.css";
import { useNavigate } from "react-router-dom";
function ParentingTips() {
  const navigate = useNavigate();
  const head = "Parenting Tips";
  const img = "./images/Marriage Consultation.png";
  return (
    <div>
      <div className="Container">
        <div className="Container-heading">
          <h1>Parenting Tips</h1>
        </div>
        <div className="conten">
          <div className="conten-left">
            <div className="img-pt"></div>
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="conten-right">
            <p>
              Parenting involves nurturing and guiding children towards healthy
              development. Encourage open communication, fostering trust and
              understanding. Set clear boundaries while allowing independence
              and autonomy within age-appropriate limits. Practice positive
              reinforcement to reinforce desired behaviors and provide
              constructive feedback. Prioritize quality time together, engaging
              in activities that promote bonding and mutual respect. Lead by
              example, demonstrating kindness, empathy, and resilience. Stay
              attuned to your child's emotions and needs, offering support and
              validation. Flexibility and patience are key; adapt parenting
              approaches to suit individual personalities and stages of
              development. Above all, shower them with love and encouragement,
              nurturing their self-esteem and confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentingTips;
