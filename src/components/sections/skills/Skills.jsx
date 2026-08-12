import { useEffect, useState } from "react";
import "./Skills.css";

const skills = [
  {
    name: "Design",
    percentage: 65,
  },
  {
    name: "Marketing",
    percentage: 90,
  },
  {
    name: "Development",
    percentage: 87,
  },
  {
    name: "User Experience",
    percentage: 70,
  },
];

function Skills() {
  const [animatedValues, setAnimatedValues] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(
        skills.map((skill) =>
          Math.round(skill.percentage * easeOut)
        )
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="skills-section">

      <div className="skills-container">

        {/* LEFT CONTENT */}

        <div className="skills-content">

          <h2>
            ENGAGING, CREATIVE PAGE AND
            <br />
            PURPOSEFUL THEME.
          </h2>

          <h3>
            Express yourself and your business through
            this amazing theme
          </h3>

          <p>
            Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis
            dapibus condimentum sit amet a augue. Sed non
            neque elit. Sed ut imperdiet nisi. Proin
            condimentum fermentum nunc. Etiam pharetra,
            erat sed fermentum feugiat, velit mauris egestas
            quam, ut aliquam exam
          </p>

        </div>


        {/* RIGHT PROGRESS BARS */}

        <div className="skills-progress">

          {skills.map((skill, index) => {

            const currentValue =
              animatedValues[index];

            return (
              <div
                className="skill-item"
                key={skill.name}
              >

                <div className="skill-header">

                  <span>
                    {skill.name}
                  </span>

                  <span>
                    {currentValue}%
                  </span>

                </div>


                <div className="skill-track">

                  <div
                    className="skill-fill"
                    style={{
                      width: `${currentValue}%`,
                    }}
                  ></div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Skills;