import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-neutral-800 border-t border-neutral-200 dark:border-neutral-700 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">HealthInsightToday</h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm">
              Making health data accessible and actionable for everyone.
            </p>
            <div className="mt-4 flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  User Guides
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Medical Glossary
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/hipaa" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  HIPAA Compliance
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary-light transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} HealthInsightToday. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">
            HealthInsightToday is not a medical device and is not intended to diagnose, treat, cure, or prevent any disease.
            Always consult with a qualified healthcare professional before making any health-related decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
