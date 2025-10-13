// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
// import { useRef, useEffect } from 'react';

// function PrayerModel() {
//   const ref = useRef();
//   const { scene, animations } = useGLTF('/models/sketchfab1.glb');
//   const { actions } = useAnimations(animations, ref);

//   useEffect(() => {
//     if (actions && actions['Scene']) {
//       actions['Scene'].reset().fadeIn(0.5).play();
//     }
//   }, [actions]);
//   console.log('Animations:', animations[0]);
//   return (
//     <primitive ref={ref} object={scene} scale={1.5} position={[0, -1, 0]} />
//   );
// }

// export default function PrayerScene() {
//   return (
//     <Canvas style={{ height: '100vh', background: '#f0f0f0' }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[2, 2, 2]} />
//       <PrayerModel />
//       <OrbitControls />
//     </Canvas>
//   );
// }


import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function PrayerModel() {
  const { scene } = useGLTF('/models/sketchfab1.glb')
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
}

export default function PrayerScene() {
  return (
    <Canvas style={{ height: '100vh', background: '#f0f0f0' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <PrayerModel />
      <OrbitControls />
    </Canvas>
  )
}
