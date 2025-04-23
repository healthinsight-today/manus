import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';

interface KeyboardNavigationHandlerProps {
  children: React.ReactNode;
}

const KeyboardNavigationHandler: React.FC<KeyboardNavigationHandlerProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useTheme();
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [keySequence, setKeySequence] = useState<string>('');
  const [keySequenceTimer, setKeySequenceTimer] = useState<NodeJS.Timeout | null>(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return;
      }

      // Show keyboard shortcuts modal
      if (e.key === '?') {
        e.preventDefault();
        setShowShortcutsModal(true);
        return;
      }

      // Toggle dark mode
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTheme();
        return;
      }

      // Search shortcut
      if (e.ctrlKey && e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]');
        if (searchInput) {
          (searchInput as HTMLElement).focus();
        }
        return;
      }

      // Handle key sequences (e.g., g + d for "go to dashboard")
      if (keySequenceTimer) {
        clearTimeout(keySequenceTimer);
      }

      // Add the current key to the sequence
      const newSequence = keySequence + e.key;
      setKeySequence(newSequence);

      // Set a timer to clear the sequence after a delay
      const timer = setTimeout(() => {
        setKeySequence('');
      }, 1000);
      setKeySequenceTimer(timer);

      // Handle navigation sequences
      if (newSequence === 'gd') {
        e.preventDefault();
        navigate('/');
        setKeySequence('');
      } else if (newSequence === 'gr') {
        e.preventDefault();
        navigate('/reports');
        setKeySequence('');
      } else if (newSequence === 'gi') {
        e.preventDefault();
        navigate('/insights');
        setKeySequence('');
      } else if (newSequence === 'gc') {
        e.preventDefault();
        navigate('/recommendations');
        setKeySequence('');
      } else if (newSequence === 'gs') {
        e.preventDefault();
        navigate('/settings');
        setKeySequence('');
      } else if (newSequence === 'nr') {
        e.preventDefault();
        navigate('/upload');
        setKeySequence('');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (keySequenceTimer) {
        clearTimeout(keySequenceTimer);
      }
    };
  }, [navigate, toggleTheme, keySequence, keySequenceTimer]);

  return (
    <>
      {children}
      <KeyboardShortcutsModal 
        isOpen={showShortcutsModal} 
        onClose={() => setShowShortcutsModal(false)} 
      />
    </>
  );
};

export default KeyboardNavigationHandler;
