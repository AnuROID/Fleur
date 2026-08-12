import "./Solutions.css";

import slide1 from "../../../assets/soloutions/h1-slide-2-img-1.png";
import slide2 from "../../../assets/soloutions/h1-slide-2-img-2.png";
import slide3 from "../../../assets/soloutions/h1-slide-2-img-3.png";

function Solutions() {
  return (
    <section className="solutions-section">

      {/* HEADER */}
      <div className="solutions-header">

        <h2>
          SIMPLE AND CLEAN SOLUTIONS
        </h2>

        <div className="solutions-decoration">
          <span></span>
          <b>◆</b>
          <span></span>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetuer gravida nibh
          vel velit auctor aliquet. Aenean sollicitudin, lorem
          quis bibendum auci elit consequat ipsutis sem niuis
          sed odio sit amet nibh
        </p>

      </div>


      {/* DEVICES */}
      <div className="solutions-image-area">

        {/* LEFT DEVICE */}
        <img
          className="solution-left"
          src={slide1}
          alt="Solution device left"
        />

        {/* CENTER DEVICE */}
        <img
          className="solution-center"
          src={slide3}
          alt="Solution device center"
        />

        {/* RIGHT DEVICE */}
        <img
          className="solution-right"
          src={slide2}
          alt="Solution device right"
        />

      </div>


      {/* BOTTOM */}
      <div className="solutions-bottom">
        <p>
          Less is definitely more.
        </p>
      </div>

    </section>
  );
}

export default Solutions;