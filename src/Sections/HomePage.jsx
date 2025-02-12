import React, { useState, useEffect ,useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { motion, AnimatePresence } from "framer-motion";
import { useControls } from "leva";

import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import Dumbbell1 from "../components/dumbbell1";
import Watch from "../components/watch";
import Bottle from "../components/bottle";
import CanvasLoader from "../components/CanvasLoader";
import Machine from "../components/machine";
import Dumbbell2 from "../components/Dumbbell2";
import Gym from "../components/Gym";
import Dumbbell3 from "../components/Dumbbell3";
import SpringCollar from "../components/springCollar";
import Model from "../components/model";
import BouncingBalls from "../components/BouncingBalls";

const HomePage = () => {
  
  // const x = useControls("SpringCollar" , 
  //   {
  //     positionX: {
  //       value:2.5 ,
  //       min : -1000 ,
  //       max : 1000
  //     },
  //     positionY: {
  //       value: 2.5 ,
  //       min : -1000 ,
  //       max : 1000
  //     },
  //     positionZ: {
  //       value:2.5 ,
  //       min : -1000 ,
  //       max : 1000
  //     },
  //     rotationX: {
  //       value:2.5 ,
  //       min : -10 ,
  //       max : 10
  //     },
  //     rotationY: {
  //       value:2.5 ,
  //       min : -10 ,
  //       max : 10
  //     },
  //     rotationZ: {
  //       value:2.5 ,
  //       min : -20 ,
  //       max : 10
  //     },
  //     scale: {
  //       value:0.1 ,
  //       min : 0.00000000001 ,
  //       max : 10
  //     }
  //   }
  // )

  const [activeModel, setActiveModel] = useState("Model");  

  return (
    <main className="h-screen w-full flex flex-col lg:flex-row justify-center items-center relative overflow-hidden">
      <AnimatePresence>

        
        <motion.section {...slideAnimation("up")} className="relative w-full h-full flex flex-col items-center">
          <motion.div {...slideAnimation("down")} className="absolute top-1/2 left-1/3">
            <h1 {...headTextAnimation} className="heading font-bold text-6xl text-white text-center">
              <span className="text-pink-600">F</span>it<span className="text-pink-600">V</span>ibez
            </h1>
          </motion.div>

          <motion.div className="w-full h-full relative">
            {[
              { text: "Strength", top: "26%", left: "30%" },
              { text: "Endurance", top: "24%", left: "70%" },
              { text: "Cardio", top: "60%", left: "10%" },
              { text: "Flexibility", top: "68%", left: "62%" },
              { text: "Wellness", top: "40%", left: "20%" },
              { text: "Health", top: "15%", left: "50%" },
              { text: "Consistency", top: "73%", left: "18%" },
              { text: "Discipline", top: "17%", left: "13%" },
              { text: "Routine", top: "54%", left: "75%" },
              { text: "Benefits", top: "35%", left: "45%" },
              { text: "Energy", top: "85%", left: "34%" },
              { text: "Yoga", top: "40%", left: "70%" },
              { text: "Workout", top: "68%", left: "42%" },
              { text: "Concentration", top: "81%", left: "54%" },
            ].map((item, index) => (
              <motion.div
                key={index} className="floating-box hover:text-lg absolute p-1 px-1 border border-gray-600 rounded-md bg-opacity-100 bg-white text-white text-md opacity-40"
                style={{
                  top: item.top,
                  left: item.left,
                }}
              
              >
              {item.text}
            </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </AnimatePresence>

      <div className="w-full h-screen border-white">
        <Canvas className="opacity-40 hover:opacity-100">
          <ambientLight intensity={7} />
          <spotLight position={[10, 10, 10]} />
          <directionalLight position={[10, 10, 10]} intensity={1} />
          <meshLambertMaterial color="gray"/>
          <meshStandardMaterial metalness={0.5} roughness={0.5} color="gray" />


          <BouncingBalls />
{/* 
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          /> */}

          
          {/* {activeModel === "Model" 
          && 
          <OrbitControls 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />} */}


          <Model 
            // position={[x.positionX , x.positionY , x.positionZ]}
            // scale={x.scale}
            rotation = {[3.2 , 3 , -3.2 ]}
            scale={2.7}  
            position={[-1, -3, 0]} 
            
          />

          <Machine
            // position={[x.positionX , x.positionY , x.positionZ]}
            // scale={x.scale}
            // rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
            position={[243 , 223 , -658]}
            scale={0.1}
            rotation = {[-8.9 , 7.2, -16.1]}
          />

          {/* <Watch
            position={[x.positionX , x.positionY , x.positionZ]}
            scale={x.scale}
            rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
          /> */}

          {/* <Dumbbell1
            position={[x.positionX , x.positionY , x.positionZ]}
            scale={x.scale}
            rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
          /> */}

          {/* <SpringCollar
            position={[x.positionX , x.positionY , x.positionZ]}
            scale={x.scale}
            rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
          /> */}

          {/* <Dumbbell2
            position={[x.positionX , x.positionY , x.positionZ]}
            scale={x.scale}
            rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
          /> */}
        
          <Dumbbell3
            position={[-15 , 10 , -18]}
            scale={0.16}
            rotation = {[4.7 , 0.9 , -0.2]}
          />

        <Gym
            position={[9 , -9 , -18]}
            scale={0.1}
            rotation = {[ -1.5 , -4.5 , 1]}
        /> 

        </Canvas>
      </div>
    </main>
  );
};

export default HomePage;