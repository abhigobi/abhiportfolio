import React from "react";
import "./projects.css";
import compliance from "../assets/compliance.png";
import ecommerce from "../assets/ecommerce.png";
import quiz from "../assets/quizz.png";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">

      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}

        <div className="project-card">

          <div className="project-image">
            <img src={compliance} alt="project"/>
          </div>

          <div className="project-content">

            <h3>Compliance Management System</h3>

            <p>
              A web application to manage and track compliance requirements for organizations.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>CSS</span>
              <span>Node.js</span>
              <span>MYSQL</span>
              <span>Git</span>
            </div>

            <div className="project-buttons">
              {/* <a href="#">Live</a> */}
              <a href="https://github.com/abhigobi/BE-Project">Github</a>
            </div>

          </div>

        </div>

        {/* Project 2 */}

        <div className="project-card">

          <div className="project-image">
            <img src={ecommerce} alt="project"/>
          </div>

          <div className="project-content">

            <h3>E-Commerce Website</h3>

            <p>
              Full stack Ecommerce websitewith authentication.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">
              {/* <a href="#">Live</a> */}
              <a href="https://github.com/abhigobi/E-commerce">Github</a>
            </div>

          </div>

        </div>

        {/* Project 3 */}

        <div className="project-card">

          <div className="project-image">
            <img src={quiz} alt="project"/>
          </div>

          <div className="project-content">

            <h3>Quizz App</h3>

            <p>
              Quizz application helps taking the quiz very easily and quickly. It has a user-friendly interface and provides a seamless experience for users to test their knowledge on various topics.
            </p>

            <div className="tech-stack">
              <span>JavaScript</span>
              <span>CSS</span>
               <span>React</span>
            </div>

            <div className="project-buttons">
              {/* <a href="#">Live</a> */}
              <a href="https://github.com/abhigobi/QuizApp">Github</a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Projects;