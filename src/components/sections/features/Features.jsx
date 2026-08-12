import { FiGlobe, FiSend, FiHeart } from "react-icons/fi";
import "./Features.css";


const features = [
  {
icon: <FiGlobe/>,
    title: "DISCOVER WHAT’S POSSIBLE",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
  {
    icon: <FiSend />,
    title: "PEOPLE REALLY MATTER",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
  {
    icon: <FiHeart />,
    title: "HAVING A PLAN FEELS GOOD",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis.",
  },
];

function Features() {
  return (
    <section className="features-section">

      <div className="features-container">

        {features.map((feature, index) => (
          <div className="feature-item" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3 className="feature-title">
              {feature.title}
            </h3>

            <p className="feature-text">
              {feature.text}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;