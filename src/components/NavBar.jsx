import React from 'react';
import { Link } from 'react-router-dom';
export const navItems = [
  { to: '', label: 'Home' },
  { to: 'positions', label: 'Positions' },
  { to: 'https://devseiko.vercel.app', label: 'Developer' },
];
function NavBar({ className }) {
  return (
    <nav className={className}>
      {navItems.map((navItem, index) => {
        return (
          <Link key={index} className="text-muted text-md" to={navItem.to}>
            {navItem.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
