import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

// List of SVG shapes to use
const shapes = [
  {
    id: "triangle",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="37.196" height="32.213">
        <path
          fill="none"
          stroke="#ffff00"
          strokeWidth="3"
          strokeMiterlimit="10"
          d="M12.837 3l5.12 8.868 5.12 8.868H2.597l5.12-8.868z"
        />
      </svg>
    ),
  },
  {
    id: "semiCircle",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="29.093" height="14.546">
        <path
          fill="none"
          stroke="#f06449"
          strokeWidth="3"
          strokeMiterlimit="10"
          d="M1.5 14.546C1.5 7.34 7.34 1.5 14.547 1.5c7.205 0 13.046 5.84 13.046 13.046"
        />
      </svg>
    ),
  },
  {
    id: "spring",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="17.046" height="36.016">
        <path
          fill="none"
          stroke="#CF4981"
          strokeWidth="3"
          strokeMiterlimit="10"
          d="M9.945 34.614S1.46 31.38 1.5 23.92s11.73-4.797 11.73-4.797S3.82 16.708 4.18 8.77s12.784-7.255 12.784-7.255"
        />
      </svg>
    ),
  },
  {
    id: "line",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="25.675" height="22.236">
        <path
          fill="none"
          stroke="#354c4a"
          strokeWidth="3"
          strokeMiterlimit="10"
          d="M4.92 2.514L21.964 19.56"
        />
      </svg>
    ),
  },
];

const Particles = ({ numberOfParticles='10' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // Track visibility

  useEffect(() => {
    const minDistance = 100; // Minimum distance between particles
    const generatedParticles = [];

    while (generatedParticles.length < numberOfParticles) {
      const newX = Math.random() * window.innerWidth;
      const newY = Math.random() * window.innerHeight;

      const isFarEnough = generatedParticles.every(
        (particle) =>
          Math.sqrt(
            (particle.x - newX) ** 2 + (particle.y - newY) ** 2
          ) >= minDistance
      );

      if (isFarEnough) {
        generatedParticles.push({
          x: newX,
          y: newY,
          shape: shapes[Math.floor(Math.random() * shapes.length)], // Random shape
          speedX: Math.random() * 1.5 + 0.5, // Random horizontal speed
          speedY: Math.random() * 1.5 + 0.5, // Random vertical speed
          directionX: Math.random() > 0.5 ? 1 : -1, // Random direction on X axis
          directionY: Math.random() > 0.5 ? 1 : -1, // Random direction on Y axis
        });
      }
    }

    setParticles(generatedParticles);

    // Set visibility after 1 second
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, transition: { delay: 1, duration: 1 } }} // Smooth fade-in after 1 second
    >
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: particle.y, // Initial random vertical position
            left: particle.x, // Initial random horizontal position
            transform: `translate(
              ${mousePosition.x * particle.speedX * particle.directionX * 0.05}px, 
              ${mousePosition.y * particle.speedY * particle.directionY * 0.05}px
            )`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {particle.shape.svg}
        </div>
      ))}
    </motion.div>
  );
};

export default Particles;
