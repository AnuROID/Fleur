import { useEffect, useRef, useState } from "react";

import {
  FiStar,
  FiSend,
  FiHeart,
  FiFeather,
} from "react-icons/fi";

import "./Counters.css";

const counters = [
  {
    icon: <FiStar />,
    number: 168,
    label: "Design",
  },
  {
    icon: <FiSend />,
    number: 2590,
    label: "Marketing",
  },
  {
    icon: <FiHeart />,
    number: 347,
    label: "Development",
  },
  {
    icon: <FiFeather />,
    number: 191,
    label: "User Experience",
  },
];

function RollingDigit({ digit, animate }) {
  const numbers = Array.from({ length: 10 }, (_, index) => index);

  return (
    <span className="rolling-digit">
      <span
        className="rolling-digit-track"
        style={{
          transform: animate
            ? `translateY(-${digit * 10}%)`
            : "translateY(0)",
        }}
      >
        {numbers.map((number) => (
          <span
            className="rolling-digit-number"
            key={number}
          >
            {number}
          </span>
        ))}
      </span>
    </span>
  );
}

function AnimatedNumber({ target, animate }) {
  const digits = String(target).split("");

  return (
    <span className="animated-number">
      {digits.map((digit, index) => (
        <RollingDigit
          key={`${target}-${index}`}
          digit={Number(digit)}
          animate={animate}
        />
      ))}
    </span>
  );
}

function Counters() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="counters-section"
    >
      <div className="counters-container">
        {counters.map((counter) => (
          <div
            className="counter-item"
            key={counter.label}
          >
            <div className="counter-icon">
              {counter.icon}
            </div>

            <div className="counter-number">
              <AnimatedNumber
                target={counter.number}
                animate={animate}
              />
            </div>

            <div className="counter-label">
              {counter.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Counters;