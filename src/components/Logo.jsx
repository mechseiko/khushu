import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
  return (
    <Link to="/" className="flex items-center">
      <img src="/icon.png" alt="Khushu Logo" className="rounded-full size-10" />
      <h1 className="font-semibold text-light leading-tight text-3xl">
        Khushu
      </h1>
    </Link>
  );
}

export default Logo;
