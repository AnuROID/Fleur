import "./Footer.css";
import logo from "../../assets/logo/logo-light.png"
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ========================================
            TOP FOOTER
        ======================================== */}

        <div className="footer-top">

          {/* ABOUT */}

          <div className="footer-column">

            <h3>ABOUT US</h3>

            <p>
              Lorem ipsum dolor sit amet, nam ut vero
              scribentur, mel veritus omnesque ei. Mutat
              labores mea ex, mei cu option indoctum.
              sumo errem partiendo ex cum.
            </p>


            <h3 className="newsletter-title">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>

            <div className="newsletter">

              <input
                type="email"
                placeholder="Enter Your Email*"
              />

              <button>
                ➤
              </button>

            </div>

          </div>


          {/* LATEST TWEETS */}

          <div className="footer-column">

            <h3>LATEST TWEETS</h3>

            <p>
              Couldn't connect with Twitter
            </p>

          </div>


          {/* INSTAGRAM */}

          <div className="footer-column">

            <h3>INSTAGRAM</h3>

            <div className="instagram-grid">

              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>

            </div>

          </div>

        </div>


        {/* ========================================
            FOOTER BOTTOM
        ======================================== */}

        <div className="footer-bottom">

          <div className="footer-brand">

            <div className="footer-logo">
          <img src={logo} alt="Fleur Logo"/>
            </div>

            <nav className="footer-nav">

              <a href="#home">
                HOME
              </a>

              <a href="#about">
                ABOUT
              </a>

              <a href="#portfolio">
                PORTFOLIO
              </a>

              <a href="#blog">
                BLOG
              </a>

              <a href="#contact">
                CONTACT
              </a>

            </nav>

          </div>


          <div className="footer-copyright">

            <strong>© 2017</strong>{" "}
            Qode Interactive.{" "}
            <span>All Rights Reserved</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;