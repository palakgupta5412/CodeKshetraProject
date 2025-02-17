import React from 'react'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
const HeroCam = ( {children , isMobile} ) => {

    const groupRef = useRef() ;
    useFrame((state , delta) => {
        easing.damp3(state.camera.position , [0,0,30], 0.45 , delta);
        if(!isMobile){

          // Calculate pointer-based rotation with constraints
      const maxRotationX = 0.1; // Maximum up/down rotation
      const maxRotationY = 0.4; // Maximum left/right rotation

      const targetRotationX = Math.max(-maxRotationX, Math.min(maxRotationX, state.pointer.y / 10));
      const targetRotationY = Math.max(-maxRotationY, Math.min(maxRotationY, -state.pointer.x / 2));

      // Apply constrained rotation with easing
      easing.dampE(groupRef.current.rotation, [targetRotationX, targetRotationY, 0], 0.25, delta);
            // easing.dampE(groupRef.current.rotation , [state.pointer.y /3 , -state.pointer.x /5 , 0] , 0.25 , delta) ;
        }
    });

  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}

export default HeroCam ; 