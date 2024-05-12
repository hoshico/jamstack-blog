import Bath from './Bath';
import { Text } from '@react-three/drei';
// 「Vector3」のインポートを追加
import { Vector3 } from 'three';

import { Canvas, useFrame } from '@react-three/fiber';
import IconView from '../iconview';
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-300 to-cyan-800 px-12 py-8 dark:from-gray-400 dark:to-gray-800">
      <div className="flex"></div>
      {/*プロフィール背景*/}
      <div className="mx-auto rounded-md bg-stone-800/60 lg:w-6/12">
        {/*プロフィールヘッダー*/}
        <div className="relative flex w-full justify-center text-center">
          <div className="buttonArea absolute left-0 grid w-16 grid-cols-3 gap-4 p-3">
            <div className="circle size-3 rounded-full bg-red-500"></div>
            <div className="circle size-3 rounded-full bg-yellow-500"></div>
            <div className="circle size-3 rounded-full bg-green-500"></div>
          </div>
          <div className="p-2">
            <span className="text-white">Profile</span>
          </div>
        </div>
        <div className="content p-8 md:p-10">
          <div className="w-full">
            <div className="mb-12">
              <div className="mb-4 bg-gray-400 p-1">
                <p className="text-2xl text-white">name:</p>
              </div>
              <div className="ml-1">
                <p className="text-xl text-white">y.Hoshi</p>
              </div>
            </div>
            <div className="mb-2 mt-4 bg-gray-400 p-1">
              <p className="text-2xl text-white">skill:</p>
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-10">
              <IconView label="typescript" />
              <IconView label="next" />
              <IconView label="react" />
              <IconView label="node" />
              <IconView label="cssmodules" />
              <IconView label="mui" />
              <IconView label="styledcomponents" />
              <IconView label="tailwindcss" />
              <IconView label="nest" />
            </div>
          </div>
          <div className="h-[250px] p-0 md:h-[400px] md:p-4">
            <Canvas>
              <ambientLight />
              <Bath position={[0, -2, 5]} />
              <Rig />
              <pointLight position={[10, 10, 10]} />
            </Canvas>
            <p className="text-center text-white">Kohmeisen in Nakameguro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
