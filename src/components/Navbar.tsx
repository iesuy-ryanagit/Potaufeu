import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  {
    to: '/home',
    label: 'Home',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <path d="M3 10.5L12 4l9 6.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    to: '/Projects',
    label: 'Projects',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#2563eb" strokeWidth="2"/>
        <path d="M8 12h8M12 8v8" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    to: '/fttokyo',
    label: '42Tokyo',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <circle cx="12" cy="12" r="9" stroke="#2563eb" strokeWidth="2"/>
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#2563eb">42</text>
      </svg>
    ),
  },
  {    to: '/career',
    label: 'Career',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <path d="M4 7h16M4 12h16M4 17h16" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    to: '/contact',
    label: 'Contact',
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" style={{ verticalAlign: 'middle', marginRight: 6 }}>
        <path d="M4 4h16v16H4V4zm2 4l8 5 8-5" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
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
