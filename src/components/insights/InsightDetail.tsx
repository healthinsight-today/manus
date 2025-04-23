import React, { useState } from 'react';
import { Report, Insight, Recommendation } from '../../types/Report';
import Card from '../common/Card';
import Button from '../common/Button';
import Tabs from '../common/Tabs';
import Modal from '../common/Modal';
import { formatDate } from '../../utils/formatters/dateFormatter';

interface InsightDetailProps {
  insight: Insight;
  report?: Report;
  relatedInsights?: Insight[];
  recommendations?: Recommendation[];
  className?: string;
  onViewReport?: () => void;
  onViewRelatedInsight?: (insightId: string) => void;
}

const InsightDetail: React.FC<InsightDetailProps> = ({
  insight,
  report,
  relatedInsights = [],
  recommendations = [],
  className = '',
  onViewReport,
  onViewRelatedInsight,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null);

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
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        );
      case 'exercise':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        );
      case 'lifestyle':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
      case 'medical':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        );
    }
  };

  // Open recommendation modal
  const openRecommendationModal = (recommendation: Recommendation) => {
    setSelectedRecommendation(recommendation);
    setIsModalOpen(true);
  };

  // Close recommendation modal
  const closeRecommendationModal = () => {
    setIsModalOpen(false);
    setSelectedRecommendation(null);
  };

  return (
    <>
      <Card className={className}>
        <div className="p-6">
          <div className="flex items-start mb-6">
            <div className={`p-3 rounded-full ${getSeverityColor(insight.severity)} mr-4`}>
              {getCategoryIcon(insight.category)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                {insight.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {insight.category}
                </span>
                <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${getSeverityColor(insight.severity)}`}>
                  {insight.severity} Severity
                </span>
                {report && (
                  <span className="text-sm text-neutral-600 dark:text-neutral-400">
                    From: {report.report_info.report_type} ({formatDate(report.report_info.report_date)})
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
              Description
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300">
              {insight.description}
            </p>
          </div>
          
          {insight.detailed_analysis && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Detailed Analysis
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300">
                {insight.detailed_analysis}
              </p>
            </div>
          )}
          
          {insight.related_parameters && insight.related_parameters.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Related Parameters
              </h3>
              <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {insight.related_parameters.map((param, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-neutral-800 dark:text-white">{param}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {recommendations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Recommendations
              </h3>
              <div className="space-y-3">
                {recommendations.map((recommendation) => (
                  <div 
                    key={recommendation.id}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    onClick={() => openRecommendationModal(recommendation)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-neutral-800 dark:text-white">
                          {recommendation.title}
                        </h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {recommendation.short_description}
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {relatedInsights.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Related Insights
              </h3>
              <div className="space-y-3">
                {relatedInsights.map((relatedInsight) => (
                  <div 
                    key={relatedInsight.id}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    onClick={() => onViewRelatedInsight && onViewRelatedInsight(relatedInsight.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full ${getSeverityColor(relatedInsight.severity)} mr-2`}></span>
                          <h4 className="font-medium text-neutral-800 dark:text-white">
                            {relatedInsight.title}
                          </h4>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {relatedInsight.description.substring(0, 100)}...
                        </p>
                      </div>
                      <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {report && (
            <div className="flex justify-end">
              <Button
                variant="primary"
                onClick={onViewReport}
              >
                View Source Report
              </Button>
            </div>
          )}
        </div>
      </Card>
      
      {/* Recommendation Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeRecommendationModal}
        title={selectedRecommendation?.title || 'Recommendation'}
        size="lg"
      >
        {selectedRecommendation && (
          <div>
            <p className="text-neutral-700 dark:text-neutral-300 mb-4">
              {selectedRecommendation.description}
            </p>
            
            {selectedRecommendation.steps && selectedRecommendation.steps.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                  Steps to Follow
                </h4>
                <ol className="list-decimal pl-5 space-y-2">
                  {selectedRecommendation.steps.map((step, index) => (
                    <li key={index} className="text-neutral-700 dark:text-neutral-300">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            )}
            
            {selectedRecommendation.resources && selectedRecommendation.resources.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                  Additional Resources
                </h4>
                <ul className="space-y-2">
                  {selectedRecommendation.resources.map((resource, index) => (
                    <li key={index}>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-dark dark:hover:text-primary-light"
                      >
                        {resource.title}
                      </a>
                      {resource.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {resource.description}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        
        <div className="mt-6 flex justify-end">
          <Button
            variant="primary"
            onClick={closeRecommendationModal}
          >
            Close
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default InsightDetail;
