import React, { useState } from 'react';
import { Recommendation } from '../../types/Report';
import Card from '../common/Card';
import Button from '../common/Button';
import Modal from '../common/Modal';
import Tabs from '../common/Tabs';

interface RecommendationDetailProps {
  recommendation: Recommendation;
  relatedRecommendations?: Recommendation[];
  className?: string;
  onViewRelatedRecommendation?: (recommendationId: string) => void;
}

const RecommendationDetail: React.FC<RecommendationDetailProps> = ({
  recommendation,
  relatedRecommendations = [],
  className = '',
  onViewRelatedRecommendation,
}) => {
  const [isResourceModalOpen, setIsResourceModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{title: string, url: string, description?: string} | null>(null);

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category?.toLowerCase()) {
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
      case 'supplement':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
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

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case 'high':
        return 'bg-error text-white';
      case 'medium':
        return 'bg-warning text-white';
      case 'low':
        return 'bg-secondary text-white';
      default:
        return 'bg-primary text-white';
    }
  };

  // Open resource modal
  const openResourceModal = (resource: {title: string, url: string, description?: string}) => {
    setSelectedResource(resource);
    setIsResourceModalOpen(true);
  };

  // Close resource modal
  const closeResourceModal = () => {
    setIsResourceModalOpen(false);
    setSelectedResource(null);
  };

  // Create tabs for the detail view
  const detailTabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="py-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            {recommendation.description}
          </p>
          
          {recommendation.benefits && recommendation.benefits.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Benefits
              </h4>
              <ul className="list-disc pl-5 space-y-2">
                {recommendation.benefits.map((benefit, index) => (
                  <li key={index} className="text-neutral-700 dark:text-neutral-300">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {recommendation.related_parameters && recommendation.related_parameters.length > 0 && (
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-2">
                Related Parameters
              </h4>
              <div className="flex flex-wrap gap-2">
                {recommendation.related_parameters.map((param, index) => (
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
        </div>
      ),
    },
    {
      id: 'steps',
      label: 'Implementation Steps',
      content: (
        <div className="py-4">
          {recommendation.steps && recommendation.steps.length > 0 ? (
            <ol className="list-decimal pl-5 space-y-4">
              {recommendation.steps.map((step, index) => (
                <li key={index} className="text-neutral-700 dark:text-neutral-300">
                  <p className="font-medium">{step}</p>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-neutral-500 dark:text-neutral-400 italic">
              No specific implementation steps provided for this recommendation.
            </p>
          )}
        </div>
      ),
    },
    {
      id: 'resources',
      label: 'Resources',
      content: (
        <div className="py-4">
          {recommendation.resources && recommendation.resources.length > 0 ? (
            <div className="space-y-4">
              {recommendation.resources.map((resource, index) => (
                <div 
                  key={index}
                  className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                  onClick={() => openResourceModal(resource)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-neutral-800 dark:text-white">
                        {resource.title}
                      </h4>
                      {resource.description && (
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {resource.description}
                        </p>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-neutral-500 dark:text-neutral-400 italic">
              No additional resources provided for this recommendation.
            </p>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <Card className={className}>
        <div className="p-6">
          <div className="flex items-start mb-6">
            <div className={`p-3 rounded-full ${getPriorityColor(recommendation.priority)} mr-4`}>
              {getCategoryIcon(recommendation.category)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-white mb-2">
                {recommendation.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {recommendation.category}
                </span>
                {recommendation.priority && (
                  <span className={`text-sm px-2 py-0.5 rounded-full font-medium ${getPriorityColor(recommendation.priority)}`}>
                    {recommendation.priority} Priority
                  </span>
                )}
              </div>
            </div>
          </div>
          
          <Tabs tabs={detailTabs} />
          
          {relatedRecommendations.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">
                Related Recommendations
              </h3>
              <div className="space-y-3">
                {relatedRecommendations.map((relatedRec) => (
                  <div 
                    key={relatedRec.id}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                    onClick={() => onViewRelatedRecommendation && onViewRelatedRecommendation(relatedRec.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-block w-2 h-2 rounded-full ${getPriorityColor(relatedRec.priority)} mr-2`}></span>
                          <h4 className="font-medium text-neutral-800 dark:text-white">
                            {relatedRec.title}
                          </h4>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                          {relatedRec.short_description || (relatedRec.description && relatedRec.description.substring(0, 100) + '...')}
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
        </div>
      </Card>
      
      {/* Resource Modal */}
      <Modal
        isOpen={isResourceModalOpen}
        onClose={closeResourceModal}
        title={selectedResource?.title || 'Resource'}
        size="md"
      >
        {selectedResource && (
          <div>
            {selectedResource.description && (
              <p className="text-neutral-700 dark:text-neutral-300 mb-4">
                {selectedResource.description}
              </p>
            )}
            
            <div className="mt-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                You can access this resource at:
              </p>
              <a 
                href={selectedResource.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark dark:hover:text-primary-light break-all"
              >
                {selectedResource.url}
              </a>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            onClick={closeResourceModal}
          >
            Close
          </Button>
          
          {selectedResource && (
            <Button
              variant="primary"
              onClick={() => window.open(selectedResource.url, '_blank')}
            >
              Open Resource
            </Button>
          )}
        </div>
      </Modal>
    </>
  );
};

export default RecommendationDetail;
