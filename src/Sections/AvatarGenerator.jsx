import React from 'react'
import Female1 from '../components/Female1'
import Female2 from '../components/Female2'
import Female3 from '../components/Female3'
import Female4 from '../components/Female4'
import Model from '../components/model'
import Male1 from '../components/Male1'
import Male2 from '../components/Male2'
import Male3 from '../components/Male3'
import Male4 from '../components/Male4'
import GridMotion from '../constants/GridMotion';
import { useControls } from 'leva'
import { useState } from 'react'
import { useEffect } from 'react'

import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import Arrow from '../components/Arrow'

const AvatarGenerator = () => {

    const [gender,setGender] = useState('Female') ;
    const [weight , setWeight] = useState(50) ;
    const [isHidden , setIsHidden] = useState(true);
    const [model , setModel] = useState(<Model scale={3.2} position={[0,-2.9,0]}/>) ;
    // let model = <Model scale={2.5} position={[0,-1.5,0]}/> ;
    const generate = (gender , weight) =>{
       setIsHidden(false);
    if(gender==='Female'){
      if(weight<45){
        setModel(<Female1 scale={3.2} position={[0,-2.9,0]}/>);
      } 
      else if(weight>45 && weight<70){
        setModel(<Female2 scale={3.2} position={[0,-2.9,0]}/>)
      }
      else if(weight>70 && weight<90

      ){
        setModel(<Female3 scale={3.2} position={[0,-2.9,0]}/>)
      }
      else{
        setModel(<Female4 scale={3.2} position={[0,-2.9,0]}/>)
      }
    }
      else{
        if(weight<65){
          setModel(<Male1 scale={3.2} position={[0,-2.9,0]}/>)
        }   
        else if(weight>65 && weight<80){
          setModel(<Male2 scale={3.2} position={[0,-2.9,0]}/>)
        }
        else if(weight>80 && weight<90){
          setModel(<Male3 scale={3.2} position={[0,-2.9,0]}/>)
        }
        else{
          setModel(<Male4 scale={3.2} position={[0,-2.9,0]}/>)
        }
      }
    }

    useEffect(() => {
      setIsHidden(true); // Reset the hidden div when gender or weight changes
    }, [gender, weight]);
    

    const getFittestModel = (gender) => {
      if (gender === 'Female') {
        return <Female1 scale={2.5} position={[0, -2, 0]} />;
      } else {
        return <Male1 scale={2.5} position={[0, -2, 0]} />;
      }
    };

    const items = [
      
      <div key='jsx-item-1'>Strength</div>,
      <img src='../src/assets/img10.avif' />,
      <img src='../src/assets/img3.jpg' />,
      <div key='jsx-item-2'><img src="../src/assets/img1.jpg" /></div>,
      <img src='../src/assets/img2.jpg' />,
      <div key='jsx-item-2'>Confidence</div>,
      <img src='../src/assets/img2.jpg' />,
      <img src='../src/assets/img2.jpg' />,
      <div key='jsx-item-2'><img src='../src/assets/img1.jpg' /></div>,
      <img src='../src/assets/img6.jpg' />,
      <div key='jsx-item-2'><img src='../src/assets/img2.jpg' /></div>,
      <img src='../src/assets/img3.jpg' />,
      <img src='../src/assets/img8.jpg' />,
      <div key='jsx-item-2'>Yoga</div>,
      <img src='../src/assets/img8.jpg' />,
      <img src='../src/assets/img2.jpg' />,
      <img src='../src/assets/img10.avif' />,
      <div key='jsx-item-3'><img src='../src/assets/img3.jpg' /></div>,
      <img src='../src/assets/img7.jpg' />,
      <img src='../src/assets/img5.jpeg' />,
      <div key='jsx-item-2'><img src='../src/assets/img4.webp' /></div>,
      <img src='../src/assets/img2.jpg' />,
      <div key='jsx-item-4'><img src='../src/assets/img1.jpg' /></div>,
      <img src='../src/assets/img2.jpeg' />,
      <img src='../src/assets/img8.jpg' />,
      <img src='../src/assets/img4.webp' />,
      <img src='../src/assets/img8.jpg' />,
      <img src='../src/assets/img2.jpg' />,
      <img src='../src/assets/img10.avif' />,
    ];
    
    


  return (

  <section className='mt-32'>

    <h1 className=' text-center text-3xl font-extrabold bg-gradient-to-r from-gray-500 via-white to-orange-700 text-black opacity-55 rounded-full p-3 '>"Curious about your digital self? Enter your details and watch your custom avatar come to life!"</h1>
    <main className="relative w-full h-screen flex flex-col md:flex-row gap-20 justify-center items-center">

<div className="absolute inset-0 -z-10 opacity-10">
  <GridMotion items={items} />
</div>

<div className="relative bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
<label className="text-white p-2 block text-lg font-semibold">Select Gender:</label>
<select
  className="p-2 border rounded-md bg-gray-700 text-white"
  value={gender}
  onChange={(e) => setGender(e.target.value)}
>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
</select>

<label className="text-white p-2 text-center block mt-2 text-lg font-semibold">Enter Weight:</label>
<input
  type="number"
  className="p-2 border rounded-md bg-gray-700 text-white w-20"
  value={weight}
  onChange={(e) => setWeight(e.target.value)}
/>
</div>


<div className={`${isHidden? "w-1/3": "w-1/5"} relative w-1/3 h-3/4 bg-black bg-opacity-70 border-2 border-orange-500 rounded-3xl flex flex-col items-center`}>
<Canvas className="h-2/3 w-full">
  <ambientLight intensity={1} />
  <directionalLight intensity={1} position={[5, 5, 5]} />
  {model}
  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>

</Canvas>

<button
  className="mt-1 mb-5 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full font-bold"
  onClick={() => generate(gender, weight)}
>
  Generate Customized Avatar
</button>
</div>


<div className={`${isHidden ? 'hidden' : 'block'} w-40 h-40`}>
  <Canvas className="w-full h-full">
    <ambientLight intensity={1} />
    <directionalLight intensity={1} position={[5, 5, 5]} />
    <Arrow 
      position={[3, -13 , -78]}
      scale={8} 
      rotation={[3.3 ,1.1 , -0.5]}
    />
  </Canvas>
</div>



<div className={`${isHidden ? 'hidden w-1/3'  : 'w-1/5 visible'} relative w-1/3 h-3/4 bg-black bg-opacity-70 border-2 border-orange-500 rounded-3xl flex-col items-center`}>

<Canvas className="h-1/3 w-full">
  <ambientLight intensity={1} />
  <directionalLight intensity={1} position={[5, 5, 5]} />
  {getFittestModel(gender)}
  <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
</Canvas>

<h3
  className="mt-1 text-center mb-5 text-orange-500 hover:text-white p-3 rounded-full font-bold"
  
>
  Ready to get this Transformed body
</h3>
</div> 

</main>

  </section>
  )
}

export default AvatarGenerator