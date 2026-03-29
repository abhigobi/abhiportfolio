import React from "react";
import "./skills.css";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongo.png";
import java from "../assets/java.png";
import git from "../assets/git.png";

const skills = [
  {
    name: "React",
    image: { react },
    rating: 5
  },
  {
    name: "JavaScript",
    image: { javascript },
    rating: 5
  },
  {
    name: "Node.js",
    image: {node},
    rating: 4
  },
  {
    name: "MongoDB",
    image: { mongodb },
    rating: 4
  },
  {
    name: "Java",
    image: { java },
    rating: 5
  },
  {
    name: "Git",
    image: { git },
    rating: 4
  }
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">

      <h2 className="skills-title">My Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ backgroundImage: `url(${skill.image})` }}
          >

            <div className="skill-overlay">

              <h3>{skill.name}</h3>

              <div className="stars">
                {"★".repeat(skill.rating)}
                {"☆".repeat(5 - skill.rating)}
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;