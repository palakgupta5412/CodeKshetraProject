import React from 'react'
import Card from '../components/Card'
import Model from '../components/model'
import { Canvas } from '@react-three/fiber'
const Exercise = () => {
  return (
    <main >
        <div className='p-5 flex flex-wrap gap-4 bg-black-100 w-full h-screen'>
            <Card />
            <Canvas>
              <ambientLight intensity={1} />
              <directionalLight position={[0, 10, 5]} intensity={1} />
              <Model />
            </Canvas>
        </div>
    </main>
  )
}

export default Exercise