import React from 'react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Handle escape key to close
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="keyboard-shortcuts-title"
    >
      <div 
        className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        tabIndex={-1}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 
              id="keyboard-shortcuts-title"
              className="text-xl font-semibold text-neutral-800 dark:text-white"
            >
              Keyboard Shortcuts
            </h2>
            <button
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white"
              aria-label="Close keyboard shortcuts dialog"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">
                Navigation Shortcuts
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Skip to main content</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Alt + 1</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Skip to navigation</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Alt + 2</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Skip to search</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Alt + 3</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Show keyboard shortcuts</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">?</kbd>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">
                Application Shortcuts
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Go to Dashboard</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">g + d</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Go to Reports</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">g + r</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Go to Insights</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">g + i</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Go to Recommendations</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">g + c</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Go to Settings</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">g + s</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Upload new report</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">n + r</kbd>
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-2">
                General Shortcuts
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Toggle dark mode</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Alt + t</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Search</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Ctrl + /</kbd>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-neutral-700 dark:text-neutral-300">Close dialog/modal</span>
                    <kbd className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded text-neutral-800 dark:text-white text-sm">Esc</kbd>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;
