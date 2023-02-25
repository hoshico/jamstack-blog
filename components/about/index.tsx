import Bath from './Bath';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
// 「Vector3」のインポートを追加
import { Vector3 } from 'three';

const Rig = ({ v = new Vector3() }) => {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
};

const AboutDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 to-cyan-800 py-8 px-12">
      <div className="mx-auto w-full rounded-md bg-gray-400 p-10">
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
              color={'#fff'}
            >
              Profile
            </Text>
          </Canvas>
        </div>
        <div className="w-full">
          <p className="text-xl text-white">name: Hoshi</p>
          <p className="mt-4 text-xl text-white">
            東京在住の駆け出しエンジニア。
          </p>
          <p className="mt-4 text-xl text-white">好きなもの: 銭湯/MLB</p>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
