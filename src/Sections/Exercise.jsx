import React from 'react'
import Card from '../components/Card'
import Model from '../components/model'
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { slideAnimation } from '../config/motion'
import Model2 from '../components/Model2'
import Female1 from '../components/Female1'
import Female4 from '../components/Female4'
import Male4 from '../components/Male4'
const Exercise = () => {
  return (
    <main >
        <div {...slideAnimation("left")} className='p-5 flex flex-wrap gap-4 bg-black-100 w-full h-screen'>
            <Card />            
        </div>
    </main>
  )
}

export default Exercise