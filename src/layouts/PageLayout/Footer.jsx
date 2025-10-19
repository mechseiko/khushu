import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer>
      <div className="bg-accent flex justify-center py-3">
        <Logo />
      </div>

      <div className="bg-grey text-white text-center md:pb-0 pb-1 text-xs md:text-sm">
        Developed by{' '}
        <Link to="https://devseiko.vercel.app" className="underline">
          mechseiko
        </Link>{' '}
        - All models by{' '}
        <Link to="https://sketchfab.com/sameka" className="underline">
          sameka
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
