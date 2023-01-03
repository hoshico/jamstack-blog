/* eslint-disable tailwindcss/no-custom-classname */
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { Profile } from '../components/types/Profile';
import { client } from '../libs/client';
import Bath from '../components/Bath';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
// 「Vector3」のインポートを追加
import { Mesh, Vector3 } from 'three';

type AboutProps = {
  profile: Profile;
};
const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 10), 0.05)
  })
};

export default function About({ profile }: AboutProps) {
  return (
    <div className="w-full mt-6 p-10 mx-auto rounded-md">
      <div className="h-[200px]">
        <Canvas>
          <ambientLight />
          <Bath position={[0, -2, 5]} />
          <Rig />
          <pointLight position={[10, 10, 10]} />
          <Text
            position={[0, 3, 0]}
            font="/Roboto-Black.ttf"
            fontSize={3}
            color={'#fff'}>
            Profile
          </Text>
        </Canvas>
      </div>
      <div className="w-full">
        <p className='text-white text-xl'>name: Hoshi</p>
        <p className="mt-4 text-white text-xl">東京在住の駆け出しエンジニア。</p>
        <p className="mt-4 text-white text-xl" >好きなもの: 銭湯/MLB</p>
      </div>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const profile = await client.get({ endpoint: 'profile' });
  return {
    props: {
      profile: profile,
    },
  };
};
