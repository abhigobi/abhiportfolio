import { useState } from "react";
import "./Navbar.css";
import gsap from "gsap";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ✅ handleEnter is back
  const handleEnter = (e) => {
    const text = e.currentTarget.querySelector(".nav-text");
    gsap.to(text, {
      rotateX: 90,
      duration: 0.25,
      onComplete: () => {
        gsap.fromTo(
          text,
          { rotateX: -90 },
          { rotateX: 0, duration: 0.25 }
        );
      }
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">ABHISHEK</div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li
            key={link.name}
            className="nav-item"
            onClick={() => scrollToSection(link.id)}
            onMouseEnter={handleEnter}
          >
            <span className="nav-text">{link.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}