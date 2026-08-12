import { useEffect, useRef, useState } from "react";
import "./ParallaxBackground.css";

function ParallaxBackground({
  image,
  speed = 0.15,
  className = "",
}) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      /*
        Only calculate the parallax while the section
        is close to the viewport.
      */

      if (
        rect.bottom >= 0 &&
        rect.top <= windowHeight
      ) {
        const distance =
          windowHeight / 2 - (rect.top + rect.height / 2);

        setOffset(distance * speed);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed]);

  return (
    <div
      ref={sectionRef}
      className={`parallax-background ${className}`}
    >
      <div
        className="parallax-background-image"
        style={{
          backgroundImage: `url("${image}")`,
          transform: `translate3d(0, ${offset}px, 0)`,
        }}
      />
    </div>
  );
}

export default ParallaxBackground;