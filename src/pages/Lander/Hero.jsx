import React, { useState } from 'react';
import PrayerScene from '../../components/PrayerScene';
import Cta from '../../components/Cta';

const Hero = () => {
  const [cursor, setCursor] = useState('grab');

  return (
    <div className="md:flex *:md:w-1/2 justify-center space-y-10">
      <section className="relative md:text-left text-center md:px-3 md:pt-20 md:pb-15 w-full">
        <h1 className="text-3xl lg:text-[40px] text-dark font-bold mb-6 leading-12">
          Everything you need to learn how to pray. <br />
          <span className="text-secondary">In 3D</span>
        </h1>
        <p className="md:text-[16px] text-sm text-grey mb-10 md:max-w-md md:mx-0 mx-10">
          Khushu teaches you how to pray correctly, combining audio, video, and
          interactive 3D experiences to help you build focus in salah.
        </p>
        <Cta
          className={
            'flex flex-row justify-center items-center gap-3 md:justify-start md:text-left'
          }
        />
      </section>
      <section className="w-full">
        <div
          onClick={() => setCursor('grabbing')}
          onDoubleClick={() => setCursor('grabbing')}
          onMouseLeave={() => setCursor('grab')}
          className={`${cursor === 'grab' ? 'cursor-grab' : 'cursor-grabbing'}`}
        >
          <PrayerScene position="takbir" height="76.7vh" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
