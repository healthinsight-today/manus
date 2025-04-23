import React from 'react';
import { Report, Insight } from '../../types/Report';
import Card from '../common/Card';
import { formatDate } from '../../utils/formatters/dateFormatter';

interface InsightCardProps {
  insight: Insight;
  report?: Report;
  className?: string;
  onClick?: () => void;
}

const InsightCard: React.FC<InsightCardProps> = ({
  insight,
  report,
  className = '',
  onClick,
}) => {
  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'high':
        return 'bg-error text-white';
      case 'medium':
        return 'bg-warning text-white';
      case 'low':
        return 'bg-secondary text-white';
      case 'info':
        return 'bg-primary text-white';
      default:
        return 'bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300';
    }
  };

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'nutrition':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        );
      case 'exercise':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        );
      case 'lifestyle':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'medical':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  return (
    <Card 
      className={`h-full transition-all duration-200 hover:shadow-lg ${className}`}
      hoverable={!!onClick}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center">
            <div className={`p-2 rounded-full ${getSeverityColor(insight.severity)} mr-3`}>
              {getCategoryIcon(insight.category)}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">
                {insight.title}
              </h3>
              <div className="flex items-center mt-1">
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  {insight.category}
                </span>
                <span className="mx-2 text-neutral-300 dark:text-neutral-600">•</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getSeverityColor(insight.severity)}`}>
                  {insight.severity}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-neutral-700 dark:text-neutral-300">
            {insight.description}
          </p>
        </div>
        
        {insight.related_parameters && insight.related_parameters.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-neutral-800 dark:text-white mb-2">
              Related Parameters:
            </h4>
            <div className="flex flex-wrap gap-2">
              {insight.related_parameters.map((param, index) => (
                <span 
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary"
                >
                  {param}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {report && (
          <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-700">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              From report: {report.report_info.report_type} • {formatDate(report.report_info.report_date)}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default InsightCard;
