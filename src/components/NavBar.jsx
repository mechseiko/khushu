import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export const navItems = [
  { to: '/', label: 'Home' },
  { to: '/positions', label: 'Learn' },
  { to: '/books', label: 'Books' },
  { to: "https://devseiko.vercel.app/contact?from=khushu", label: 'Contribute' },
  { to: '/about', label: 'About' },
];
function NavBar({ className }) {
  const location = useLocation();
  const currentNavItem = `/${location.pathname.split('/')[1]}`;

  return (
    <nav className={className}>
      {navItems.map((navItem, index) => {
        return (
          <Link
          title={navItem.label}
            target={`${!navItem.to.startsWith('/') && '_blank'}`}
            key={index}
            className={`text-md py-0.5 px-2 rounded-sm text-light ${currentNavItem === navItem.to ?  'bg-primary' : 'hover:bg-primaryHover'}`}
            to={navItem.to}
          >
            {navItem.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default NavBar;
