
import { useNavigate } from "react-router-dom";
import "./ServicesSection.css";

import JapaneseImg from "../../assets/Japanese-Psychology-PNG-100x100.png";
import SomaticImg from "../../assets/Somatic-Experience-PNG-100x100.png";
import SpiritualPsychImg from "../../assets/Spiritual-Psychology-PNG-100x100.png";
import SpiritualTapImg from "../../assets/Spiritual-Tapping-PNG-100x100.png";
import EmotionalFreedomImg from "../../assets/Emotional-Freendom-PNG-100x100.png";
import SportsPsychImg from "../../assets/Sports-Psychology-PNG-1-100x100.png";
import BioFeedbackImg from "../../assets/Bio-Feedback-PNG-100x100.png";
import NLPImg from "../../assets/Neurolinguistic-Programming-PNG-100x100.png";
import TimeManagementImg from "../../assets/Time-Management-PNG-1-100x100.png";
import CognitiveImg from "../../assets/Cognitive-Behaviors-Therapy-PNG-100x100.png";
import EmotionalQImg from "../../assets/Emotional-Quotient-Management-PNG-100x100.png";
import YogaImg from "../../assets/yoga-excercise-png-1-100x100.png";

const services = [
  { label: "Japanese Psychology", path: "/japanese-psychology", img: JapaneseImg },
  { label: "Somatic Experience", path: "/somatic-experience", img: SomaticImg },
  { label: "Integrated Yoga Exercise", path: "/integrated-yoga-exercise", img: YogaImg },
  { label: "Spiritual Psychology", path: "/spiritual-psychology", img: SpiritualPsychImg },
  { label: "Spiritual Tapping", path: "/spiritual-tapping", img: SpiritualTapImg },
  { label: "Emotional Freedom", path: "/emotional-freedom", img: EmotionalFreedomImg },
  { label: "Sports Psychology", path: "/sports-psychology", img: SportsPsychImg },
  { label: "Bio Feedback", path: "/bio-feedback", img: BioFeedbackImg },
  { label: "Neurolinguistic Programming", path: "/neurolinguistic-programming", img: NLPImg },
  { label: "Time Management", path: "/time-management", img: TimeManagementImg },
  { label: "Cognitive Behaviour Therapy", path: "/cognitive-behaviour-therapy", img: CognitiveImg },
  { label: "Emotional Quotient Management", path: "/emotional-quotient-management", img: EmotionalQImg },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="services-wrapper">
      <div className="services-grid">
        {services.map((service) => (
          <div
            key={service.path}
            className="service-item"
            onClick={() => navigate(service.path)}
          >
            <div className="service-circle">
              <img src={service.img} alt={service.label} />
            </div>
            <p className="service-label">{service.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;