import React from 'react';
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer>
      <div className="bg-accent gap-3 text-center text-light -z-10 flex flex-col items-center justify-center pt-3">
        <Logo />
                      <p>&copy; Khushu {new Date().getFullYear()}.</p>

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
