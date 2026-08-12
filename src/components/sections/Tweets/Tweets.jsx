import "./Tweets.css";
import ParallaxBackground from "../../parallax/ParallaxBackground";
import ParImage from "../../../assets/parallal/par.jpg"
import { FaTwitter } from "react-icons/fa";
function Tweets() {
  return (
    <section className="tweets-section">

      {/* Parallax background */}
      <ParallaxBackground
        image={ParImage}
        speed={0.15}
      />

      {/* Content */}
      <div className="tweets-overlay">

        <div className="tweets-content">

          <div className="tweets-icon">
           <FaTwitter/>
          </div>

          <h2>LATEST TWEETS</h2>

          <div className="tweets-decoration">
            <span></span>
            <b>◆</b>
            <span></span>
          </div>

          <p>
            Couldn't connect with Twitter
          </p>

        </div>

      </div>

    </section>
  );
}

export default Tweets;