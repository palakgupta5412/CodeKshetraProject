// BouncingBalls.js
import React, { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const BouncingBall = ({ position, size }) => {
  const meshRef = useRef();
  const speed = Math.random() * 0.02 + 0.01; // Random speed for each ball
  const direction = Math.random() < 0.5 ? 1 : -1; // Random direction

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.y += speed * direction;
      if (meshRef.current.position.y > 5 || meshRef.current.position.y < -5) {
        meshRef.current.position.y = position[1]; // Reset position
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color="white" opacity={Math.random() * 0.2 + 0.05} transparent />
    </mesh>
  );
};

const BouncingBalls = () => {
  const balls = Array.from({ length: 5 }, (_, index) => ({
    position: [Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5],
    size: Math.random() * 0.5 + 0.1,
  }));

  return (
    <>
      {balls.map((ball, index) => (
        <BouncingBall key={index} position={ball.position} size={ball.size} />
      ))}
    </>
  );
};

export default BouncingBalls;