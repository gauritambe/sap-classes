import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from '../ui/Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/course-catalog', label: 'Courses' },
    { path: '/about', label: 'About' },
    { path: '/student-dashboard', label: 'Dashboard' }
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="GraduationCap" size={24} color="#FFFFFF" />
            </div>
            <span className="header-logo-text">SAP Classes Pro</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Button
              variant="ghost"
              size="sm"
              iconName="Search"
              iconPosition="left"
              className="hidden lg:flex"
            >
              Search
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="LogIn"
              iconPosition="left"
            >
              Sign In
            </Button>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-button"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </header>
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : 'closed'}`}>
        <div className="mobile-menu-content">
          <nav className="mobile-menu-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <Button
              variant="outline"
              fullWidth
              iconName="Search"
              iconPosition="left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Search Courses
            </Button>
            <Button
              variant="default"
              fullWidth
              iconName="LogIn"
              iconPosition="left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;