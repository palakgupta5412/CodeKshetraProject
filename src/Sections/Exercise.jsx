import React from 'react'
import Card from '../components/Card'
import Model from '../components/model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { slideAnimation } from '../config/motion'
import Model2 from '../components/Model2'
const Exercise = () => {
  return (
    <main >
        <div {...slideAnimation("left")} className='p-5 flex flex-wrap gap-4 bg-black-100 w-full h-screen'>
            <Card />
            <Canvas className='w-1/4 h-full flex border-2 border-orange-500'>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 10, 5]} intensity={1} />
              <Model scale={2} position={[0, 0, 0]}/>
              
              <OrbitControls 
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
        </div>
    </main>
  )
}

export default Exercise