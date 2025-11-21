import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import bgImage from "../assets/fondo.png";
import character from "../assets/personaje.png";

export default function Hero() {
    const charRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            charRef.current,
            { y: 30, opacity: 0},
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
    }, [])


    return (
        <div className="hero"
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
            {/*Character, mi personaje*/}
            <img 
            ref={charRef}
            src= {character}
            alt="Character"
            style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                width: "350px",
                zIndex: 10,
            }}
            />

             {/* Iconos */}
      <div
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
        <a
          href="#projects"
          style={{
            color: "white",
            fontSize: "22px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Projects
        </a>

        </div>
         </div>
    )
}