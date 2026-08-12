import { useState } from "react";
import "./Work.css";
import { FiSearch } from "react-icons/fi";
import img1 from "../../../assets/work/fashion-port-img-4.jpg"
import img2 from "../../../assets/work/port2-img-1.jpg"
import img3 from "../../../assets/work/port2-img-2.jpg"
import img4 from "../../../assets/work/port2-img-4.jpg"
import img5 from "../../../assets/work/port2-img-3.jpg"
import img6 from "../../../assets/work/port4-img-6.jpg"
import img7 from "../../../assets/work/port4-img-7.jpg"
const categories = [
  "ALL",
  "ARTISTIC",
  "MODERN",
  "PHOTOGRAPHY",
  "PRINT",
];

const works = [
  {
    image: img1,
    category: "ARTISTIC",
  },
  {
    image: img1,
    category: "MODERN",
  },
  {
    image: img2,
    category: "PHOTOGRAPHY",
  },
  {
    image: img3,
    category: "PRINT",
  },
  {
    image: img4,
    category: "ARTISTIC",
  },
  {
    image: img5,
    category: "MODERN",
  },
  {
    image: img6,
    category: "PHOTOGRAPHY",
  },
  {
    image: img7,
    category: "PRINT",
  },
];

function Work() {

  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredWorks =
    activeCategory === "ALL"
      ? works
      : works.filter(
          (work) => work.category === activeCategory
        );


  return (
    <section className="work-section">

      {/* HEADER */}

      <div className="work-header">

        <h2>
          OUR AMAZING WORK
        </h2>

        <div className="work-decoration">

          <span></span>

          <b>◆</b>

          <span></span>

        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur gravida
          nibh vel velit auctor aliquet. Aenean sollicitudin,
          lorem quis bibendum auci elit consequat ipsutis sem
          mauris sed odio sit amet nibh.
        </p>

      </div>


      {/* FILTER */}

      <div className="work-filters">

        {categories.map((category) => (

          <button
            key={category}
            className={
              activeCategory === category
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveCategory(category)
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* GRID */}

      <div className="work-grid">

        {filteredWorks.map((work, index) => (

          <div
            className="work-item"
            key={`${work.image}-${index}`}
          >

            <img
              src={work.image}
              alt={`Work ${index + 1}`}
            />

            <div className="work-overlay">
              <span><FiSearch/></span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Work;