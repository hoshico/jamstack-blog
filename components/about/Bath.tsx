/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Object3D } from 'three';

type a = Object3D<Event>;

export default function Model(props: any) {
  const { nodes, materials } = useGLTF('/koumeisen.glb');
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.平面002.geometry}
        material={materials['マテリアル.003']}
        position={[0, 0, -3]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[4, 0.8, 2.4]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.平面001.geometry}
        material={materials['マテリアル.001']}
        position={[1.7, 2, -4.7]}
        rotation={[Math.PI / 2, 0, Math.PI / 4]}
        scale={[4, 0.2, 2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.平面003.geometry}
        material={materials['マテリアル.004']}
        position={[-2.82, 2, -5.82]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={[2.4, 0.2, 2]}
      />
      <group
        position={[0.7, 0.4, -3.7]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.2, 0.14, 0.2]}
      >
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.立方体007.geometry}
          material={materials['マテリアル.005']}
        />
        <mesh
          castShadow
          receiveShadow
          //@ts-ignore
          geometry={nodes.立方体007_1.geometry}
          material={materials['マテリアル.006']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.円柱001.geometry}
        material={materials['マテリアル.008']}
        position={[-1.4, 1, -3.85]}
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
        scale={[0.2, 1.33, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.円柱002.geometry}
        material={materials['マテリアル.009']}
        position={[-0.1, 1, -2.5]}
        rotation={[0, Math.PI / 4, -Math.PI / 2]}
        scale={[0.2, 1.33, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.立方体001.geometry}
        material={materials['マテリアル.007']}
        position={[0.9, 0.4, -3.5]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[0.16, 0.4, 1.4]}
      />
    </group>
  );
}

useGLTF.preload('/koumeisen.glb');
