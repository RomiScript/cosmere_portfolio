import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bgImage from "../assets/fondo.png";
import character from "../assets/personaje.png";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";
import "../Styles/hero.css";

export default function Hero() {
  const charRef = useRef(null);
  const iconsRef = useRef(null);
  const titleRef = useRef(null);

  //ANIMACIÓN DEL TÍTULO
  useEffect(() => {
  gsap.fromTo(
    titleRef.current,
    { y: 40, opacity: 0, filter: "blur(6px)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1.6,
      ease: "power3.out",
      delay: 0.3,
    }
  );
}, []);


  // ANIMACIÓN DEL PERSONAJE
  useEffect(() => {
    gsap.fromTo(
      charRef.current,
      { y: 30, opacity: 0 },
      {
        y: -10,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.to(charRef.current, {
      y: "-=20",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "power1.inOut",
    });
  }, []);

  // ANIMACIÓN DE LOS ICONOS
  useEffect(() => {
    gsap.fromTo(
      iconsRef.current.children,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      }
    );

    gsap.to(iconsRef.current.children, {
      y: "-=8",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
      delay: 1.2,
    });
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
<h1
  ref={titleRef}
  style={{
    position: "absolute",
    top: "18%",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: "50px",
    fontWeight: "700",
    textAlign: "center",
    textShadow: "0 0 12px rgba(255,255,255,0.4)",
    zIndex: 20,
    lineHeight: "1.2",
  }}
>
  Hola, soy Romi.
  <br />
  <span style={{ fontSize: "28px", fontWeight: "400" }}>
    Me gusta crear experiencias web de principio a fin.
  </span>
</h1>



      <img
        ref={charRef}
        src={character}
        alt="Character"
        className="hero-character"
        style={{
          position: "relative",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -60%)",
          zIndex: 10,
        }}
      />

      <div
        ref={iconsRef}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "25px",
          zIndex: 20,
        }}
      >
        <a href="https://github.com" target="_blank">
          <FaGithub size={40} color="white" />
        </a>

        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin size={40} color="white" />
        </a>

        <a href="#projects">
          <FaBriefcase size={40} color="white" />
        </a>
      </div>
    </div>
  );
}
