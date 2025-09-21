import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    to: '/Potaufeu/home',
    label: 'Home',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <path d="M3 10.5L12 4l9 6.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    to: '/Potaufeu/fttokyo',
    label: '42Tokyo',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="2"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2563eb">42</text>
      </svg>
    ),
  },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="nav-container" aria-label="Main navigation">
      {navLinks.map(link => (
        <Link
          key={link.to}
          to={link.to}
          className={location.pathname === link.to ? 'active' : ''}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
