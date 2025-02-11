import React from 'react'
import Model2 from './Model2'
import { getExercises } from '../constants'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CardModel } from './CardModel'
const Card = ({model , name , text}) => {

    const [currEx , setEx] = useState(0);
    const currCard = getExercises[currEx]

    const handleNavigation = (direction) =>{
        if(direction === 'previous'){
          if(currEx === 0){
            setEx(2) ;
          }else{
            setEx(currEx-1) ;
          }
            
        }
        else{
          if(currEx === 2){
            setEx(0) ;
          }else{
            setEx(currEx+1) ;
          }  
        }
    
      }

  return (
    <main className='m-28 mb-14 text-center w-full flex flex-wrap justify-center'>
        <div className='grid lg:grid-cols-1 w-1/3 h-full rounded-3xl border-2 border-orange-500' >
            <div>

            <div className='p-2 h-3/5'>
                <Canvas>
                    <ambientLight intensity={1} position={[10,10,10]} />
                    <directionalLight intensity={3} position={[2,2,2]} />
                    <CardModel scale={3} position={[-0 , -2.5 ,0]} />
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
                </Canvas>
            </div>

            <div className="flex flex-col gap-5 text-center justify-center w-1/2text-white-600 my-5">
                  <p className="text-white text-2xl font-semibold underline">{currCard.name}</p>

                  <p className="text-white">{currCard.review}</p>
                </div>

                <div className="flex p-2 items-center w-full justify-between mt-7">

                  <button className='w-6 h-6 arrow-btn' onClick={()=>{handleNavigation('previous')}}>
                    <img src="src/assets/left-arrow.png" alt="left-arrow" />
                  </button>

                  <button className='w-6 h-6 arrow-btn' onClick={()=>{handleNavigation('next')}}>
                    <img src='src/assets/right-arrow.png' alt='right-arrow' />
                  </button>

                </div>
            </div>

            
        </div>
    </main>
  )
}

export default Card