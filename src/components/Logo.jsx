import React from 'react';
import { Link } from 'react-router-dom';

function Logo(props) {
  return (
    <Link to="/" className="flex">
      <img src="/icon.png" alt="Kushoo Logo" className="rounded-full size-10" />
      <h1 className="font-semibold text-muted leading-tight text-3xl">
        Kushoo
      </h1>
    </Link>
  );
}

export default Logo;
