import React, { useEffect, useRef } from "react";
import "./Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Experience = () => {

  const timelineRef = useRef([]);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    timelineRef.current.forEach((el, index) => {

      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 80
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          }
        }
      );

    });

  }, []);

  const addToRefs = (el) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  return (
    <section className="experience-section" id="experience">

      <h2 className="experience-title">My Experience</h2>

      <div className="timeline">

        <div ref={addToRefs} className="timeline-item right">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>2019 – SSC Completion</h3>

            <p className="brief">
              Completed primary school education.
            </p>

            <div className="extra-info">
              <p>
                Passed with 93%. Participated in anchoring,
                competitions and various cultural activities.
              </p>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="timeline-item left">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>2021 – HSC Completion</h3>

            <p className="brief">
              Completed higher secondary education.
            </p>

            <div className="extra-info">
              <p>
                Passed with 95.83 % in boards.
                Developed strong interest in computer science
                and technology.
              </p>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="timeline-item right">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>2021 – 2025 B.E in Information Technology</h3>

            <p className="brief">
              Started learning development and programming.
            </p>

            <div className="extra-info">
              <p>
               
               Graduated with 8.9 CGPA in B.E. Developed strong foundation in software development, algorithms and data structures. Gained experience in Java, JavaScript, web development and test automation.
               Participated in varoius cultural events and hackathons. Explored AI and Machine Learning through small projects and online courses.
              </p>
            </div>
          </div>
        </div>

        <div ref={addToRefs} className="timeline-item left">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3>2025 – Now Joined LTM</h3>

            <p className="brief">
              Full time Engineer at LTM.
            </p>

            <div className="extra-info">
              <p>
                Compled traning on selenium and test automation.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Experience;