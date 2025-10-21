import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer>
      <div className="bg-accent -z-10 flex justify-center py-3">
        <Logo />
      </div>

      <div className="bg-grey text-light text-center md:pb-0 pb-1 text-xs md:text-sm">
        Developed by{' '}
        <Link
          target="_blank"
          to="https://devseiko.vercel.app"
          className="underline"
        >
          mechseiko
        </Link>{' '}
        - All models by{' '}
        <Link
          target="_blank"
          to="https://sketchfab.com/sameka"
          className="underline"
        >
          sameka
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
