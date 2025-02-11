import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "Explore Startups", color: "bg-blue-500" },
  { id: 2, title: "Find Jobs", color: "bg-red-500" },
  { id: 3, title: "Investors & Funding", color: "bg-green-500" },
  { id: 4, title: "Build Your Team", color: "bg-yellow-500" }
];

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gray-900 overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`absolute w-64 h-40 rounded-lg shadow-lg flex justify-center items-center text-white text-lg font-bold ${card.color}`}
          style={{
            top: `${40 + index * 10}%`,
            left: `${30 + index * 15}%`,
          }}
          animate={{
            x: mousePos.x * 30 * (index + 1),
            y: mousePos.y * 30 * (index + 1),
            rotate: mousePos.x * 5 * (index + 1),
          }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          {card.title}
        </motion.div>
      ))}
    </div>
  );
}
