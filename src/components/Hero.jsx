import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Hero.css";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const letters = nameRef.current.children;

    // name animation
    gsap.fromTo(
      letters,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
      }
    );

    // floating image
    gsap.to(imageRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // scroll indicator rotation
    gsap.to(scrollRef.current, {
      rotation: 360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

  }, []);

  const name = "ABHISHEK KULKARNI";

  return (
    <section className="hero">
      <div className="hero-left">

        <h1 className="hero-name" ref={nameRef}>
          {name.split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>

        <p className="hero-role">Software Engineer</p>

          <div className="hero-text">


  <a 
    href="/test.pdf" 
    download="Abhishek_kulkarni_Resume.pdf"
    className="resume-btn"
  >
    Download Resume
  </a>

</div>
      </div>

      <div className="hero-right">
        <img ref={imageRef} src={profile} alt="profile" />
      </div>

      <div ref={scrollRef} className="scroll-indicator">
        SCROLL <br /> DOWN
      </div>

    </section>
  );
};

export default Hero;