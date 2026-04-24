import { useNavigate } from "react-router-dom";

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
  { label: "Japanese Psychology",          path: "/japanese-psychology",          img: JapaneseImg       },
  { label: "Somatic Experience",           path: "/somatic-experience",           img: SomaticImg        },
  { label: "Integrated Yoga Exercise",     path: "/integrated-yoga-exercise",     img: YogaImg           },
  { label: "Spiritual Psychology",         path: "/spiritual-psychology",         img: SpiritualPsychImg },
  { label: "Spiritual Tapping",            path: "/spiritual-tapping",            img: SpiritualTapImg   },
  { label: "Emotional Freedom",            path: "/emotional-freedom",            img: EmotionalFreedomImg},
  { label: "Sports Psychology",            path: "/sports-psychology",            img: SportsPsychImg    },
  { label: "Bio Feedback",                 path: "/bio-feedback",                 img: BioFeedbackImg    },
  { label: "Neurolinguistic Programming",  path: "/neurolinguistic-programming",  img: NLPImg            },
  { label: "Time Management",              path: "/time-management",              img: TimeManagementImg },
  { label: "Cognitive Behaviour Therapy",  path: "/cognitive-behaviour-therapy",  img: CognitiveImg      },
  { label: "Emotional Quotient Management",path: "/emotional-quotient-management",img: EmotionalQImg     },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
    
      <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
        {services.map((service) => (
          <div
            key={service.path}
            onClick={() => navigate(service.path)}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
          
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-100 
              flex items-center justify-center overflow-hidden
              group-hover:shadow-md group-hover:scale-105 transition-all duration-200">
              <img
                src={service.img}
                alt={service.label}
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              />
            </div>

      
            <p className="text-center text-xs sm:text-sm text-gray-700 font-medium leading-snug
              group-hover:text-gray-900 transition-colors px-1">
              {service.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;