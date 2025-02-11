import React from 'react'
import { Html , useProgress } from '@react-three/drei'

const CanvasLoader = () => {

  const  {progress} = useProgress();
  return (
    //Since this component we will call inside the canvas tag therefore whatever we return in this compnoent should be as per threejs 
    //Therefore write everything in html tag with attributes like this ;
    <Html
        as = "div" 
        center
        style = {{display : 'flex' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}} >
          <span className="canvas-loader"/>
          <p style={{fontSize : 14 , color : '#f1f1f1' , fontWeight : 800 , marginTop : 40}}>
             {progress!=100 ? `${progress.toFixed(2)}%` : "Loading..."}
          </p>
    </Html>
  ) 
}

export default CanvasLoader ;