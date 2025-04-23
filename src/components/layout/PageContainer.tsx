import React, { ReactNode } from 'react';

interface PageContainerProps {
  title: string;
  description?: string;
  children: ReactNode;
  actions?: ReactNode;
  isLoading?: boolean;
  error?: string | null;
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  children,
  actions,
  isLoading = false,
  error = null
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-white">{title}</h1>
          {description && (
            <p className="mt-1 text-neutral-600 dark:text-neutral-300">{description}</p>
          )}
        </div>
        {actions && (
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {actions}
          </div>
        )}
      </div>

      {isLoading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {error && (
        <div className="bg-error bg-opacity-10 border-l-4 border-error text-error p-4 mb-6 rounded" role="alert">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-error" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {!isLoading && !error && (
        <div className="min-h-[200px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default PageContainer;
