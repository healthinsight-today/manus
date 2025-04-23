import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useTheme } from '../../context/ThemeContext';

const Header: React.FC = () => {
  const { user, isAuthenticated, logout } = useUser();
  const { theme, setTheme, isDarkMode } = useTheme();

  const handleThemeToggle = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <header className="bg-white dark:bg-neutral-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/images/logo.svg" 
                alt="HealthInsightToday Logo" 
                className="h-10 w-auto mr-3"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/40x40?text=HIT';
                }}
              />
              <span className="text-xl font-bold text-primary dark:text-white">HealthInsightToday</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/reports" className="text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light transition-colors">
              Reports
            </Link>
            <Link to="/insights" className="text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light transition-colors">
              Insights
            </Link>
            <Link to="/recommendations" className="text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light transition-colors">
              Recommendations
            </Link>
            <Link to="/history" className="text-neutral-700 dark:text-neutral-200 hover:text-primary dark:hover:text-primary-light transition-colors">
              History
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={handleThemeToggle}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              className="p-2 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {isAuthenticated ? (
              <div className="relative group">
                <button 
                  className="flex items-center focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                  aria-label="User menu"
                  aria-expanded="false"
                >
                  <img 
                    src={user?.profile.avatar || "/assets/images/default-profile.png"} 
                    alt="User profile" 
                    className="h-8 w-8 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/32x32?text=User';
                    }}
                  />
                  <span className="ml-2 text-neutral-700 dark:text-neutral-200 hidden md:block">{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                  <Link to="/settings" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700">
                    Settings
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Sign in
              </Link>
            )}

            <button 
              className="md:hidden p-2 rounded-md text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
