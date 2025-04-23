import React from 'react';

interface ScreenReaderTextProps {
  children: React.ReactNode;
}

/**
 * Component for text that is only visible to screen readers
 * This is useful for providing additional context to screen reader users
 * without affecting the visual layout
 */
const ScreenReaderText: React.FC<ScreenReaderTextProps> = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
};

export default ScreenReaderText;
