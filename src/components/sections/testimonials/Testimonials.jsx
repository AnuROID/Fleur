import { useEffect, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.",
    name: "NICOLE BURKE",
    company: "Google Analytics",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet mauris accumsan ipsum velit.",
    name: "JULIA MARTIN",
    company: "Creative Studio",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetuer gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auci elit consequat ipsutis sem nibhid elits sed odio sit amet nibh vulputate cursus a sit amet mauris.",
    name: "EMILY BROWN",
    company: "Wedding Planner",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[current];

  return (
    <section className="testimonials-section">

      <div
        className="testimonial-content"
        key={current}
      >

        {/* Heading */}

        <h1 className="testimonials-title">
          TESTIMONIALS
        </h1>


        {/* Decoration */}

        <div className="testimonials-decoration">

          <span></span>

          <b>◆</b>

          <span></span>

        </div>


        {/* Quote */}

        <p className="testimonial-text">
          “{testimonial.text}”
        </p>


        {/* Name */}

        <h3 className="testimonial-name">
          {testimonial.name}
        </h3>


        {/* Company */}

        <p className="testimonial-company">
          {testimonial.company}
        </p>


        {/* Dots */}

        <div className="testimonial-dots">

          {testimonials.map((_, index) => (

            <button
              key={index}
              className={
                index === current
                  ? "testimonial-dot active"
                  : "testimonial-dot"
              }
              onClick={() => setCurrent(index)}
              aria-label={`Show testimonial ${index + 1}`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;