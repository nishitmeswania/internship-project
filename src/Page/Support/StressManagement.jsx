import React from "react";
import "./support.css";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
const StressManagement = () => {
  const navigate = useNavigate();
  const head = "Stress Management";
  const img =
    "https://images.pexels.com/photos/626165/pexels-photo-626165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="Main-page">
      <div className="Container">
        <div className="Container-heading">
          <IoIosArrowBack
            onClick={() => navigate("/EmotionalSupport")}
            className="backicon"
          />
          <h1>Stress Management</h1>
        </div>
        <div className="content">
          <div className="content-left">
            <img
              src="https://images.pexels.com/photos/626165/pexels-photo-626165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <button onClick={() => navigate("/Done", { state: { head, img } })}>
              Book Now
            </button>
          </div>
          <div className="content-right">
            <p>
              Unlock the secrets of restorative sleep with Divine Connection's
              expert guidance. Our certified online psychologists and counselors
              offer confidential therapy sessions tailored to address
              sleep-related issues such as insomnia, nightmares, or restless
              nights. Whether you're struggling to fall asleep or experiencing
              disruptions in your sleep patterns, we're here to help you reclaim
              peaceful nights and rejuvenating rest. Trust in our secure online
              platform to provide a safe space for exploration and healing,
              allowing you to discover effective strategies for better sleep
              hygiene and overall well-being. With Divine Connection, you can
              embark on a journey towards restful sleep and waking up refreshed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressManagement;
