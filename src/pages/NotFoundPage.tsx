import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-neutral-900 dark:text-white">Page Not Found</h2>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button
            variant="primary"
            onClick={() => navigate('/')}
            aria-label="Return to dashboard"
          >
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
