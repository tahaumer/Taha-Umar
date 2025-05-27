import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useCursor } from "../context/CursorContext";

const CustomCursor = () => {
  const { cursorVariant, cursorText } = useCursor();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX - 10 , y: e.clientY - 15 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Cursor style variants
  const variants = {
    default: { opacity: 1, height: 20, width: 20, backgroundColor: "#74d7cb", x: position.x, y: position.y },
    white: { opacity: 1, height: 20, width: 20, backgroundColor: "#fff", x: position.x, y: position.y },
    project: { opacity: 1, backgroundColor: "#fff", color: "#000", height: 80, width: 80, x: position.x - 32, y: position.y - 32 },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex justify-center items-center"
      animate={cursorVariant}
      variants={variants}
    >
      {cursorText && <span className="absolute font-openSans font-bold">{cursorText}</span>}
    </motion.div>
  );
};

export default CustomCursor;
