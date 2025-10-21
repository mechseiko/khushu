import React, { useState } from 'react';
import { Github, Menu, MSquare, X } from 'lucide-react';
import Cta from '../../components/Cta';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import NavBar from '../../components/NavBar';
import Container from '../../components/Container';

function Header(props) {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div className="bg-accent md:opacity-90 sticky top-0 z-9999 text-light">
      <Container>
        <header className="hidden w-full md:flex flex-row justify-between items-center px-3 py-1">
          <Logo />
          <div className="flex justify-center gap-5 items-center">
            <NavBar className="flex justify-center items-center gap-x-1" />
            <div className="text-center flex flex-row-reverse gap-2 items-center *:cursor-pointer">
              <Link target="_blank" to="https://github.com/mechseiko/kushoo">
                <Github size={28} />
              </Link>
              <Link target="_blank" to="https://devseiko.vercel.app">
                <MSquare size={28} />
              </Link>
            </div>
          </div>
        </header>

        <header className="w-full md:hidden flex flex-col py-1">
          <div className="flex justify-between items-center">
            <Logo />
            <button className="md:hidden transition-all duration-300 ease-in-out">
              {showHeader ? (
                <X size={28} onClick={() => setShowHeader(false)} />
              ) : (
                <Menu size={28} onClick={() => setShowHeader(true)} />
              )}
            </button>
          </div>

          {showHeader && (
            <ul className="animate-navBar">
              <NavBar className="my-3 ml-3 gap-1 flex flex-col items-start text-left *:p-2 *:w-full" />
              <p className="ml-5">&copy; Khushu {new Date().getFullYear()}.</p>
            </ul>
          )}
        </header>
      </Container>
    </div>
  );
}

export default Header;
