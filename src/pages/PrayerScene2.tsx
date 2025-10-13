import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import { Group } from 'three';

function PrayerModel({
  time = 0,
  autoplay = true,
  position = [0, -1, 0],
  scale = 1.5,
}: {
  time?: number;
  autoplay?: boolean;
  position?: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<Group>(null);
  const { scene, animations } = useGLTF('/models/sketchfab1.glb');
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions['Scene']) {
      const action = actions['Scene'];
      action.reset().fadeIn(0.5).play();
      action.time = time;
      action.paused = !autoplay;
    }
  }, [actions, time, autoplay]);

  return (
    <primitive ref={ref} object={scene} scale={scale} position={position} />
  );
}

export default function PrayerScene() {
  return (
    <div className='h-screen'>
      <Canvas style={{ height: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        {/* Main animated model */}
        <PrayerModel autoplay={true} position={[0, -1, 0]} />

        {/* Frozen prayer frames, spaced horizontally */}
        <PrayerModel
          time={2}
          autoplay={false}
          position={[-6, -1, -4]}
          scale={1.2}
        />
        <PrayerModel
          time={8}
          autoplay={false}
          position={[-3, -1, -4]}
          scale={1.2}
        />
        <PrayerModel
          time={14}
          autoplay={false}
          position={[0, -1, -4]}
          scale={1.2}
        />
        <PrayerModel
          time={20}
          autoplay={false}
          position={[3, -1, -4]}
          scale={1.2}
        />
        <PrayerModel
          time={28}
          autoplay={false}
          position={[6, -1, -4]}
          scale={1.2}
        />

        <OrbitControls />
      </Canvas>
    </div>
  );
}
