import React, { useContext, useState } from 'react';
import Container from '../../components/Container';
import { Github, MSquare, X } from 'lucide-react';
import PrayerScene from './PrayerScene';
import { Link } from 'react-router-dom';
import Cta from '../../components/Cta';

const Hero = () => {
  const [cursor, setCursor] = useState('grab');

  return (
    <div>
      <Container>
        <div className="md:flex *:md:w-1/2 justify-center space-y-10">
          <section className="relative md:text-left text-center md:px-3 md:pt-20 md:pb-15 w-full">
            <h1 className="text-3xl lg:text-[40px] text-dark font-bold mb-6 leading-12">
              Everything you need to learn how to pray - in{' '}
              <span className="text-secondary">3D</span>
            </h1>
            <p className="md:text-[16px] text-sm text-grey mb-10 md:max-w-md md:mx-0 mx-10">
              Kushoo teaches you how to pray the right way from audios to videos
              in 3d immersive experiences
            </p>
            <Cta
              className={
                'flex flex-row justify-center items-center gap-3 md:justify-start md:text-left'
              }
            />
          </section>

          <section className="w-full">
            {/* <div className="sketchfab-embed-wrapper">
                {' '}
                <iframe
                  title="kushoo"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; fullscreen; xr-spatial-tracking"
                  xr-spatial-tracking
                  execution-while-out-of-viewport
                  execution-while-not-rendered
                  web-share
                  src="https://sketchfab.com/models/eb0f80a7278243b4988b159fc957bbd5/embed"
                >
                  {' '}
                </iframe>
              </div> */}
            <div
              onClick={() => setCursor('grabbing')}
              onDoubleClick={() => setCursor('grabbing')}
              onMouseLeave={() => setCursor('grab')}
              className={`${cursor === 'grab' ? 'cursor-grab' : 'cursor-grabbing'}`}
            >
              <PrayerScene position="takbir" />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
