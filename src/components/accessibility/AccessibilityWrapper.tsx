import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface AccessibilityWrapperProps {
  children: React.ReactNode;
}

const AccessibilityWrapper: React.FC<AccessibilityWrapperProps> = ({ children }) => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Focus management for route changes
  useEffect(() => {
    // Set focus to main content area when route changes
    if (mainContentRef.current) {
      // Set tabIndex to -1 to make it focusable but not in tab order
      mainContentRef.current.tabIndex = -1;
      mainContentRef.current.focus();
      // Remove tabIndex after focus to prevent keyboard focus issues
      mainContentRef.current.removeAttribute('tabindex');
    }
  }, [location.pathname]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt+1: Skip to main content
      if (e.altKey && e.key === '1' && mainContentRef.current) {
        e.preventDefault();
        mainContentRef.current.focus();
      }
      
      // Alt+2: Skip to navigation
      if (e.altKey && e.key === '2') {
        e.preventDefault();
        const nav = document.querySelector('nav');
        if (nav) {
          (nav as HTMLElement).focus();
        }
      }
      
      // Alt+3: Skip to search
      if (e.altKey && e.key === '3') {
        e.preventDefault();
        const search = document.querySelector('input[type="search"]');
        if (search) {
          (search as HTMLElement).focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Skip to content link - visible only when focused */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      {/* Main content wrapper with accessibility attributes */}
      <div 
        ref={mainContentRef}
        id="main-content"
        className="outline-none"
        role="main"
        aria-label="Main content"
      >
        {children}
      </div>
    </>
  );
};

export default AccessibilityWrapper;
