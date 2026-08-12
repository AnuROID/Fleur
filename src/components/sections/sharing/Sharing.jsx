import { useEffect, useState } from "react";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./Sharing.css";

import sharing1 from "../../../assets/sharing1.jpg";
import sharing2 from "../../../assets/sharing2.jpg";
import sharing3 from "../../../assets/sharing3.jpg";
import sharing4 from "../../../assets/sharing4.jpg";
import sharing5 from "../../../assets/sharing5.jpg";


const posts = [
  {
    image: sharing1,
    title: "CONNECT YOUR WORLDS",
    description:
      "Proin gravida nibh vel velit auctor aliquetenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
    category: "Fashion",
    date: "January 24, 2016",
  },

  {
    image: sharing2,
    title: "CHOOSE YOUR STYLE",
    description:
      "Proin gravida nibh vel velit auctor aliquetenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
    category: "Decoration",
    date: "February 24, 2016",
  },

  {
    image: sharing5,
    title: "WEDDING LISTS",
    description:
      "Proin gravida nibh vel velit auctor aliquetenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
    category: "Design",
    date: "March 24, 2016",
  },

  {
    image: sharing4,
    title: "SOMETHING SPECIAL",
    description:
      "Proin gravida nibh vel velit auctor aliquetenean sollicitudiem quis bibendum auctor, nisi elit consequat ipsutis sem...",
    category: "Planning",
    date: "March 24, 2016",
  },
];


function Sharing() {

  const [startIndex, setStartIndex] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);


  /* ==================================================
     CHANGE SLIDE
  ================================================== */

  const changeSlide = (newIndex) => {

    setIsAnimating(true);

    setStartIndex(newIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);

  };


  /* ==================================================
     NEXT
  ================================================== */

  const nextPosts = () => {

    changeSlide(
      (startIndex + 1) % posts.length
    );

  };


  /* ==================================================
     PREVIOUS
  ================================================== */

  const previousPosts = () => {

    changeSlide(
      (startIndex - 1 + posts.length) % posts.length
    );

  };


  /* ==================================================
     AUTOMATIC ROTATION
  ================================================== */

  useEffect(() => {

    const timer = setInterval(() => {

      setIsAnimating(true);

      setStartIndex((current) => {
        return (current + 1) % posts.length;
      });

      setTimeout(() => {
        setIsAnimating(false);
      }, 800);

    }, 4000);


    return () => {
      clearInterval(timer);
    };

  }, []);


  /* ==================================================
     VISIBLE POSTS
  ================================================== */

  const visiblePosts = [
    posts[startIndex],

    posts[
      (startIndex + 1) % posts.length
    ],

    posts[
      (startIndex + 2) % posts.length
    ],
  ];


  return (

    <section className="sharing-section">


      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="sharing-header">

        <h2>
          WE'RE SHARING EVERYTHING
        </h2>


        <div className="sharing-decoration">

          <span></span>

          <b>◆</b>

          <span></span>

        </div>


        <p>
          Lorem ipsum dolor sit amet, consectetur a gravida nibh
          umus vel velit auctor aliquet aenean sollicitudin lorem.
        </p>

      </div>


      {/* ==================================================
          CAROUSEL
      ================================================== */}

      <div className="sharing-carousel">


        {/* LEFT ARROW */}

        <button
          className="sharing-arrow sharing-arrow-left"
          onClick={previousPosts}
          aria-label="Previous posts"
        >

          <FiChevronLeft />

        </button>


        {/* ==================================================
            CARD GRID
        ================================================== */}

        <div
          className={`sharing-grid ${
            isAnimating ? "sharing-animate" : ""
          }`}
        >

          {visiblePosts.map((post, index) => (

            <article
              className="sharing-card"
              key={`${post.title}-${startIndex}-${index}`}
            >

              {/* IMAGE */}

              <div className="sharing-image">

                <img
                  src={post.image}
                  alt={post.title}
                />

              </div>


              {/* CONTENT */}

              <div className="sharing-content">

                <h3>
                  {post.title}
                </h3>


                <p>
                  {post.description}
                </p>


                <div className="sharing-separator"></div>


                <div className="sharing-meta">

                  <span className="sharing-category">

                    <b>◆</b>

                    {post.category}

                  </span>


                  <span className="sharing-date">

                    {post.date}

                  </span>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* RIGHT ARROW */}

        <button
          className="sharing-arrow sharing-arrow-right"
          onClick={nextPosts}
          aria-label="Next posts"
        >

          <FiChevronRight />

        </button>

      </div>

    </section>

  );
}


export default Sharing;