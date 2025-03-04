// import React from 'react'
// import Model2 from './Model2'
// import { getExercises } from '../constants'
// import { useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { useControls } from "leva";
// import { OrbitControls } from '@react-three/drei'
// import { CardModel } from './CardModel'
// import { headTextAnimation } from '../config/motion'
// import { slideAnimation } from '../config/motion'
// const Card = ({model , name , text }) => {

// //  const x = useControls("CardModel" , 
// //     {
// //       positionX: {
// //         value:2.5 ,
// //         min : -1000 ,
// //         max : 1000
// //       },
// //       positionY: {
// //         value: 2.5 ,
// //         min : -1000 ,
// //         max : 1000
// //       },
// //       positionZ: {
// //         value:2.5 ,
// //         min : -1000 ,
// //         max : 1000
// //       },
// //       rotationX: {
// //         value:2.5 ,
// //         min : -10 ,
// //         max : 10
// //       },
// //       rotationY: {
// //         value:2.5 ,
// //         min : -10 ,
// //         max : 10
// //       },
// //       rotationZ: {
// //         value:2.5 ,
// //         min : -20 ,
// //         max : 10
// //       },
// //       scale: {
// //         value:0.1 ,
// //         min : 0.00000000001 ,
// //         max : 10
// //       }
// //     }
// //   )

//     const [currEx , setEx] = useState(0);
//     const currCard = getExercises[currEx]

//     const handleNavigation = (direction, text) => {
//       if (direction === 'previous') {
//           setEx(currEx === 0 ? getExercises.length - 1 : currEx - 1);
//       } else {
//           setEx(currEx === getExercises.length - 1 ? 0 : currEx + 1);
//       }
//   };
  

//   return (
//     <main {...slideAnimation("right")} className='m-28 mb-14 text-center w-full flex flex-wrap justify-center'>
//         <div className='grid lg:grid-cols-1 w-1/3 h-full rounded-3xl border-2 border-orange-500' >
//             <div>

//             <div className='p-2 h-3/5'>
//                 <Canvas>
//                         <ambientLight intensity={1} />
//                         <directionalLight intensity={1} position={[5, 5, 5]} />
//                         <perspectiveCamera position={[0, 0, 10]} fov={75} />
//                     <CardModel 
//                       // scale={3} 
//                       text={currCard.name}
//                       position={[0 , -9 ,-3]}
//                       // position={[x.positionX , x.positionY , x.positionZ]}
//                       scale={5.4}
//                       rotation = {[1.5 , 3.1 , 3.1]}
//                       // rotation = {[x.rotationX , x.rotationY , x.rotationZ]}
//                     />

//                     <OrbitControls  
//                       enableZoom={false} 
//                       maxPolarAngle={Math.PI / 2} 
//                       minPolarAngle={Math.PI / 2} 
//                       target={[0, -4 , -3]}
//                     />
//                 </Canvas>
//             </div>

//             <div className="flex flex-col gap-5 text-center justify-center w-1/2text-white-600 my-5">
//                   <p className="text-white text-2xl font-semibold underline">{currCard.name}</p>

//                   <p className="text-white">{currCard.review}</p>
//                 </div>

//                 <div className="flex p-2 items-center w-full justify-around mt-7">

//                   <button className='w-6 h-6 arrow-btn hover:border-1 hover:border-orange-500' onClick={()=>{handleNavigation('previous',{text})}}>
//                     <img src="src/assets/left-arrow.png" alt="left-arrow" />
//                   </button>
//                   <button className='bg-orange-600 p-2 text-white bold w-1/2 rounded-3xl border-2 border-black'>
//                     Start Exercise
//                   </button>
//                   <button className='w-6 h-6 arrow-btn' onClick={()=>{handleNavigation('next')}}>
//                     <img src='src/assets/right-arrow.png' alt='right-arrow' />
//                   </button>

//                 </div>
//             </div>

            
//         </div>
//     </main>
//   )
// }

// export default Card


import React from 'react'
import Model2 from './Model2'
import { getExercises } from '../constants'
import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useControls } from "leva";
import { OrbitControls } from '@react-three/drei'
import { CardModel } from './CardModel'
import { headTextAnimation } from '../config/motion'
import { slideAnimation } from '../config/motion'

const Card = ({ model, name, text }) => {
    const [currEx, setEx] = useState(0);
    const currCard = getExercises[currEx]

    const handleNavigation = (direction, text) => {
        if (direction === 'previous') {
            setEx(currEx === 0 ? getExercises.length - 1 : currEx - 1);
        } else {
            setEx(currEx === getExercises.length - 1 ? 0 : currEx + 1);
        }
    };

    return (
        <main {...slideAnimation("right")} className='m-4 md:m-8 lg:m-28 mb-14 text-center w-full flex flex-wrap justify-center'>
            <div className='grid lg:grid-cols-1 w-full md:w-1/2 lg:w-1/3 h-full rounded-3xl border-2 border-orange-500'>
                <div>
                    <div className='p-2 h-3/5'>
                        <Canvas {...slideAnimation("left")}>
                            <ambientLight intensity={1} />
                            <directionalLight intensity={1} position={[5, 5, 5]} />
                            <perspectiveCamera position={[0, 0, 10]} fov={75} />
                            <CardModel
                                text={currCard.name}
                                position={[0, -9, -3]}
                                scale={5.4}
                                rotation={[1.5, 3.1, 3.1]}
                            />
                            <OrbitControls
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                                target={[0, -4, -3]}
                            />
                        </Canvas>
                    </div>

                    <div className="flex flex-col gap-5 text-center justify-center w-full text-white-600 my-5">
                        <p className="text-white text-xl md:text-2xl font-semibold underline">{currCard.name}</p>
                        <p className="text-white text-sm md:text-base">{currCard.review}</p>
                    </div>

                    <div className="flex p-2 items-center w-full justify-around mt-7">
                        <button className='w-6 h-6 arrow-btn hover:border-1 hover:border-orange-500' onClick={() => { handleNavigation('previous', { text }) }}>
                            <img src="src/assets/left-arrow.png" alt="left-arrow" />
                        </button>
                        <button className='bg-orange-600 p-2 text-white bold w-1/2 rounded-3xl border-2 border-black'>
                            Start Exercise
                        </button>
                        <button className='w-6 h-6 arrow-btn' onClick={() => { handleNavigation('next') }}>
                            <img src='src/assets/right-arrow.png' alt='right-arrow' />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Card