// import React, { useState, useEffect ,useRef } from "react";
// import { useFrame } from '@react-three/fiber';
// import { easing } from 'maath';
// import { motion, AnimatePresence } from "framer-motion";
// import { useControls } from "leva";


// import {
//   headContentAnimation,
//   headContainerAnimation,
//   headTextAnimation,
//   slideAnimation,
// } from "../config/motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { Suspense } from "react";
// import Dumbbell1 from "../components/dumbbell1";
// import Watch from "../components/watch";
// import Bottle from "../components/bottle";
// import CanvasLoader from "../components/CanvasLoader";
// import Machine from "../components/machine";
// import Dumbbell2 from "../components/Dumbbell2";
// import Gym from "../components/Gym";
// import Dumbbell3 from "../components/Dumbbell3";
// import SpringCollar from "../components/springCollar";
// import Model from "../components/model";
// import BouncingBalls from "../components/BouncingBalls";

// const HomePage = () => {
  
//   // const x = useControls("SpringCollar" , 
//   //   {
//   //     positionX: {
//   //       value:2.5 ,
//   //       min : -1000 ,
//   //       max : 1000
//   //     },
//   //     positionY: {
//   //       value: 2.5 ,
//   //       min : -1000 ,
//   //       max : 1000
//   //     },
//   //     positionZ: {
//   //       value:2.5 ,
//   //       min : -1000 ,
//   //       max : 1000
//   //     },
//   //     rotationX: {
//   //       value:2.5 ,
//   //       min : -10 ,
//   //       max : 10
//   //     },
//   //     rotationY: {
//   //       value:2.5 ,
//   //       min : -10 ,
//   //       max : 10
//   //     },
//   //     rotationZ: {
//   //       value:2.5 ,
//   //       min : -20 ,
//   //       max : 10
//   //     },
//   //     scale: {
//   //       value:0.1 ,
//   //       min : 0.00000000001 ,
//   //       max : 10
//   //     }
//   //   }
//   // )

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Update mouse position on mouse move
//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     setMousePosition({ x: clientX, y: clientY });
//   };

//   return (
//     <main onMouseMove={handleMouseMove} className="h-screen w-full flex flex-col lg:flex-row justify-center items-center relative overflow-hidden">
//       <AnimatePresence>

        
//         <motion.section {...slideAnimation("up")} className="relative w-full h-full flex flex-col items-center">
//           <motion.div {...slideAnimation("down")} className="absolute top-1/2 left-3/5">
//             <h1 {...headTextAnimation} className="heading font-bold text-7xl text-white text-center">
//               <span className="text-pink-600">F</span>it<span className="text-pink-600">V</span>ibez
//             </h1>
//           </motion.div>

//           <motion.div className="w-full h-full relative">
//             {[
//               { text: "Strength", top: "26%", left: "30%" },
//               { text: "💪🏼", top: "40%", left: "35%" },
//               { text: "🎧", top: "24%", left: "70%" },
//               { text: "🏋🏻‍♀️", top: "60%", left: "10%" },
//               { text: "𓌉◯𓇋", top: "68%", left: "62%" },
//               { text: "Wellness", top: "40%", left: "20%" },
//               { text: "Health", top: "15%", left: "50%" },
//               { text: "Consistency", top: "67%", left: "24%" },
//               { text: "Discipline", top: "25%", left: "10%" },
//               { text: "Routine", top: "54%", left: "75%" },
//               { text: "Benefits", top: "35%", left: "45%" },
//               { text: "🔥", top: "85%", left: "34%" },
//               { text: "Yoga", top: "40%", left: "70%" },
//               { text: "Workout", top: "68%", left: "42%" },
//               { text: "Concentration", top: "81%", left: "54%" },
//               { text: "🤸🏻‍♀️", top: "12%", left: "35%" },
//               { text: "Nutrition", top: "78%", left: "12%" },
//               { text: "❚█══█❚", top: "10%", left: "17%" },
//               { text: "🏃🏻‍♀️", top: "41%", left: "82%" },
//               { text: "Focus", top: "27%", left: "57%" },
//               { text: "Empowerment", top: "82%", left: "73%" },
//               { text: "⚡︎", top: "42%", left: "59%" },
//               { text: "Performance", top: "52%", left: "26%" },
//               { text: "Goals", top: "71%", left: "84%" },
//               { text: "Flexibility", top: "18%", left: "80%" },
//             ].map((item, index) => {
//               const posX = mousePosition.x + item.offsetX - 50; // Adjust for centering
//               const posY = mousePosition.y + item.offsetY - 50; // Adjust for centering
 
//               return (
//               <motion.div
//                 key={index} className="floating-box hover:text-lg absolute p-1 px-1 border border-gray-600 rounded-md bg-opacity-100 bg-white text-white text-md opacity-60"
//                 style={{
//                   top: item.top,
//                   left: item.left,
//                 }}
              
//               >
//               {item.text}
//             </motion.div>
//             )})}
//           </motion.div>
//         </motion.section>
//       </AnimatePresence>
//     </main>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Original positions of the floating divs
  const originalPositions = [
    { text: "Strength", top: "26%", left: "30%" },
    { text: "💪🏼", top: "40%", left: "35%" },
    { text: "🎧", top: "24%", left: "70%" },
    { text: "🏋🏻‍♀️", top: "60%", left: "10%" },
    { text: "𓌉◯𓇋", top: "68%", left: "62%" },
    { text: "Wellness", top: "40%", left: "20%" },
    { text: "Health", top: "15%", left: "50%" },
    { text: "Consistency", top: "67%", left: "24%" },
    { text: "Discipline", top: "25%", left: "10%" },
    { text: "Routine", top: "54%", left: "75%" },
    { text: "Benefits", top: "35%", left: "45%" },
    { text: "🔥", top: "85%", left: "34%" },
    { text: "Yoga", top: "40%", left: "70%" },
    { text: "Workout", top: "68%", left: "42%" },
    { text: "Concentration", top: "81%", left: "54%" },
    { text: "🤸🏻‍♀️", top: "12%", left: "35%" },
    { text: "Nutrition", top: "78%", left: "12%" },
    { text: "❚█══█❚", top: "10%", left: "17%" },
    { text: "🏃🏻‍♀️", top: "41%", left: "82%" },
    { text: "Focus", top: "27%", left: "57%" },
    { text: "Empowerment", top: "82%", left: "73%" },
    { text: "⚡︎", top: "42%", left: "59%" },
    { text: "Performance", top: "52%", left: "26%" },
    { text: "Goals", top: "71%", left: "84%" },
    { text: "Flexibility", top: "18%", left: "80%" },
  ];

  // Update mouse position on mouse move
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <main
      className="h-screen w-full flex flex-col lg:flex-row justify-center items-center relative overflow-hidden"
      onMouseMove={handleMouseMove} // Add mouse move event
    >
      <AnimatePresence>
        <motion.section {...slideAnimation("up")} className="relative w-full h-full flex flex-col items-center">
          <motion.div {...slideAnimation("down")} className="absolute top-1/2 left-3/5">
            <h1 {...headTextAnimation} className="heading font-bold text-7xl text-white text-center">
              <span className="text-pink-600">F</span>it<span className="text-pink-600">V</span>ibez
            </h1>
          </motion.div>

          <motion.div className="w-full h-full relative">
            {originalPositions.map((item, index) => {
              // Calculate the offset based on mouse position
              const offsetX = (mousePosition.x - window.innerWidth / 3) * 0.09; // Adjust multiplier for sensitivity
              const offsetY = (mousePosition.y - window.innerHeight / 3) * 0.09; // Adjust multiplier for sensitivity

              return (
                <motion.div
                  key={index}
                  className="floating-box hover:text-lg absolute p-1 px-1 border border-gray-600 rounded-md bg-opacity-100 bg-white text-white text-md opacity-60"
                  style={{
                    top: `calc(${item.top} + ${offsetY}px)`,
                    left: `calc(${item.left} + ${offsetX}px)`,
                  }}

                  whileHover={{ scale: 7 }}
                >
                  
                  {item.text}
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
};

export default HomePage;