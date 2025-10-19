import React from 'react';
import { Link } from 'react-router-dom';

const Cta = ({ className }) => {
  return (
    <div className={className}>
      <Link to="positions">
        <button className="md:px-6 bg-primary hover:bg-primaryHover transition-colors duration-150 ease-in text-muted md:py-3 p-2 rounded font-medium cursor-pointer">
          Get Started
        </button>
      </Link>
      <Link to="positions">
        <button className="md:px-6 md:py-3 p-2 bg-grey text-muted rounded text-sm font-medium cursor-pointer">
          Learn More
        </button>
      </Link>
    </div>
  );
};

export default Cta;
