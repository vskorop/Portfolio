/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bottle-oil/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Mesh_bottleOil.geometry} material={materials.green} />
      <mesh geometry={nodes.Mesh_bottleOil_1.geometry} material={materials.brown} />
      <mesh geometry={nodes.Mesh_bottleOil_2.geometry} material={materials.brownLight} />
    </group>
  )
}

useGLTF.preload('https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/bottle-oil/model.gltf')
