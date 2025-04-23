import React, { useState } from 'react';
import { Recommendation } from '../../types/Report';
import RecommendationCard from './RecommendationCard';
import Card from '../common/Card';
import Tabs from '../common/Tabs';
import SearchBar from '../common/SearchBar';
import Dropdown from '../common/Dropdown';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';
import Pagination from '../common/Pagination';

interface RecommendationsListProps {
  recommendations: Recommendation[];
  isLoading?: boolean;
  error?: string | null;
  className?: string;
  onRecommendationClick?: (recommendation: Recommendation) => void;
}

const RecommendationsList: React.FC<RecommendationsListProps> = ({
  recommendations,
  isLoading = false,
  error = null,
  className = '',
  onRecommendationClick,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(9);

  // Get unique categories
  const categories = ['all', ...new Set(recommendations.map(rec => rec.category?.toLowerCase() || 'other'))];
  
  // Get unique priorities
  const priorities = ['all', ...new Set(recommendations.map(rec => rec.priority?.toLowerCase() || 'medium'))];

  // Filter recommendations
  const filteredRecommendations = recommendations.filter(rec => {
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      rec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (rec.description && rec.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (rec.short_description && rec.short_description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Filter by category
    const matchesCategory = selectedCategory === 'all' || 
      (rec.category?.toLowerCase() || 'other') === selectedCategory;
    
    // Filter by priority
    const matchesPriority = selectedPriority === 'all' || 
      (rec.priority?.toLowerCase() || 'medium') === selectedPriority;
    
    return matchesSearch && matchesCategory && matchesPriority;
  });

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredRecommendations.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRecommendations.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search
  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  // Handle category change
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setCurrentPage(1);
  };

  // Handle priority change
  const handlePriorityChange = (value: string) => {
    setSelectedPriority(value);
    setCurrentPage(1);
  };

  // Group recommendations by category for tab view
  const recommendationsByCategory: Record<string, Recommendation[]> = {};
  
  recommendations.forEach(rec => {
    const category = rec.category?.toLowerCase() || 'other';
    if (!recommendationsByCategory[category]) {
      recommendationsByCategory[category] = [];
    }
    recommendationsByCategory[category].push(rec);
  });

  // Create tabs for categories
  const categoryTabs = [
    {
      id: 'all',
      label: 'All Recommendations',
      content: (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((recommendation) => (
            <RecommendationCard
              key={recommendation.id}
              recommendation={recommendation}
              onClick={() => onRecommendationClick && onRecommendationClick(recommendation)}
            />
          ))}
        </div>
      ),
    },
    ...Object.entries(recommendationsByCategory).map(([category, categoryRecommendations]) => ({
      id: category,
      label: category.charAt(0).toUpperCase() + category.slice(1),
      content: (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryRecommendations
            .filter(rec => {
              // Apply other filters except category
              const matchesSearch = searchTerm === '' || 
                rec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (rec.description && rec.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                (rec.short_description && rec.short_description.toLowerCase().includes(searchTerm.toLowerCase()));
              
              const matchesPriority = selectedPriority === 'all' || 
                (rec.priority?.toLowerCase() || 'medium') === selectedPriority;
              
              return matchesSearch && matchesPriority;
            })
            .slice(indexOfFirstItem, indexOfLastItem)
            .map((recommendation) => (
              <RecommendationCard
                key={recommendation.id}
                recommendation={recommendation}
                onClick={() => onRecommendationClick && onRecommendationClick(recommendation)}
              />
            ))}
        </div>
      ),
    })),
  ];

  return (
    <div className={className}>
      <div className="mb-6">
        <Card>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <SearchBar
                  placeholder="Search recommendations..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Dropdown
                  items={categories.map(category => ({
                    label: category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1),
                    value: category,
                  }))}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Category"
                />
                <Dropdown
                  items={priorities.map(priority => ({
                    label: priority === 'all' ? 'All Priorities' : priority.charAt(0).toUpperCase() + priority.slice(1),
                    value: priority,
                  }))}
                  value={selectedPriority}
                  onChange={handlePriorityChange}
                  placeholder="Priority"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <LoadingSpinner size="lg" text="Loading recommendations..." />
        </div>
      ) : error ? (
        <ErrorMessage
          message={error}
          title="Error loading recommendations"
        />
      ) : filteredRecommendations.length === 0 ? (
        <Card>
          <div className="p-12 text-center">
            <svg className="w-16 h-16 text-neutral-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-2">No Recommendations Found</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              {searchTerm || selectedCategory !== 'all' || selectedPriority !== 'all'
                ? "No recommendations match your current filters. Try adjusting your search criteria."
                : "There are no recommendations available for your reports yet."}
            </p>
          </div>
        </Card>
      ) : (
        <>
          <Tabs tabs={categoryTabs} />
          
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="mt-8"
            />
          )}
        </>
      )}
    </div>
  );
};

export default RecommendationsList;
