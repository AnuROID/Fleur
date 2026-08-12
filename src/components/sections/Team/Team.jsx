import ParallaxBackground from "../../parallax/ParallaxBackground"
import{
 FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import parImage from "../../../assets/parallal/par.jpg"
import "./Team.css";
import team1 from "../../../assets/team/team1.jpg"
import team2 from "../../../assets/team/team2.jpg"
import team3 from "../../../assets/team/team3.jpg"
const teamMembers = [
  {
    image:team1,
    name: "CYNTHIA FOWLER",
    role: "Senior Designer",
  },
  {
    image: team2,
    name: "CYNTHIA FOWLER",
    role: "Marketing Manager",
  },
  {
    image:team3,
    name: "CYNTHIA FOWLER",
    role: "PR Manager",
  },
];

function Team() {
  return (
    <section className="team-section">

      {/* ========================================
          PARALLAX BACKGROUND
      ======================================== */}

      <ParallaxBackground
        image={parImage}
        speed={0.5}
        className="team-parallax"
      />


      {/* ========================================
          LIGHT OVERLAY
      ======================================== */}

      <div className="team-overlay"></div>


      {/* ========================================
          CONTENT
      ======================================== */}

      <div className="team-content">

        {/* HEADER */}

        <div className="team-header">

          <h1>OUR AMAZING TEAM</h1>

          <div className="team-decoration">

            <span></span>

            <b>◆</b>

            <span></span>

          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetuer gravida
            nibh vel velit auctor aliquet. Aenean sollicitudin,
            lorem quis bibendum auci elit
            <br />
            consequat ipsutis sem nisiis sed odio sit amet nibh
          </p>

        </div>


        {/* ========================================
            TEAM MEMBERS
        ======================================== */}

        <div className="team-grid">

          {teamMembers.map((member, index) => (

            <div
              className="team-member"
              key={index}
            >

              {/* IMAGE */}

              <div className="team-member-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>


              {/* NAME */}

              <h2>
                {member.name}
              </h2>


              {/* ROLE */}

              <p className="team-role">
                {member.role}
              </p>


              {/* DESCRIPTION */}

              <p className="team-description">
                "Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh
                euismod tincidunt utidun, lorem quis
                bibendum auctor, nisi elit consequat
                ipsutis sem nibh id elit."
              </p>


              {/* SOCIAL ICONS */}

              <div className="team-social">

                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>

                <a href="#" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" aria-label="Instagram">
                  <FaInstagram />
                </a>

                <a href="#" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Team;