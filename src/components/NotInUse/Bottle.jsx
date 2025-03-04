/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: ali_hidayat (https://sketchfab.com/ali_hidayat)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gym-shaker-bottle-38d6d1c01caa499cbbe2c4b2a037b073
Title: Gym Shaker Bottle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Bottle = (props) => {
  const { nodes, materials } = useGLTF('/models/bottle.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4.479}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0.006, 5.156, 0.887]} rotation={[0.308, 0, Math.PI / 2]} scale={0.097}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface1_aiStandardSurface3_0.geometry}
              material={materials.aiStandardSurface3}
              position={[0.488, 0.075, -4.671]}
              rotation={[0, -0.824, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder1_aiStandardSurface5_0.geometry}
            material={materials.aiStandardSurface5}
            position={[-0.007, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pHelix1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-0.007, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube1_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-0.007, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube2_lambert1_0.geometry}
            material={materials.lambert1}
            position={[-0.007, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder2_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
            position={[-0.007, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface2_aiStandardSurface2_0.geometry}
            material={materials.aiStandardSurface2}
            position={[-0.007, 0.828, -2.21]}
            rotation={[0.41, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCube9_aiStandardSurface4_0.geometry}
            material={materials.aiStandardSurface4}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/bottle.glb')
export default Bottle